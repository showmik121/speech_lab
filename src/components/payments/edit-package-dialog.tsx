import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { PACKAGE_STATUSES, PACKAGE_TYPES, type PaymentPackage } from "@/constants/payment-data";

/**
 * Edit Package Dialog — pre-fills all fields from the selected package.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function EditPackageDialog({
  open,
  onOpenChange,
  item,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: PaymentPackage | null;
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [registrationFee, setRegistrationFee] = useState("");
  const [discount, setDiscount] = useState("");
  const [duration, setDuration] = useState("");
  const [sessions, setSessions] = useState("");
  const [expiry, setExpiry] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill when item changes
  useEffect(() => {
    if (item) {
      setName(item.name);
      setType(item.type);
      setStatus(item.status);
      setDescription(item.description);
      setPrice(String(item.price));
      setRegistrationFee(String(item.registrationFee));
      setDiscount(String(item.discount));
      setDuration(item.durationLabel);
      setSessions(String(item.sessions));
      setExpiry(item.expiry);
    }
  }, [item]);

  const close = () => onOpenChange(false);

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={(next) => { if (!next) close(); else onOpenChange(true); }}>
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Edit Package</DialogTitle>
          <DialogDescription>
            Update the details for <span className="font-medium text-foreground">{item.name}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-2 sm:grid-cols-2">
          {/* Basic Info */}
          <FormField id="edit-package-name" label="Package name" required>
            <Input
              id="edit-package-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Monthly 1:1 Individual Plan"
            />
          </FormField>

          <FormField id="edit-package-type" label="Package type" required>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger id="edit-package-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {PACKAGE_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="edit-package-description"
            label="Description"
            hint="Shown to guardians on the invoice"
            className="sm:col-span-2"
          >
            <Textarea
              id="edit-package-description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is included in this package…"
            />
          </FormField>

          <FormField id="edit-package-status" label="Status" required>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="edit-package-status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {PACKAGE_STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          {/* Pricing */}
          <FormField id="edit-package-price" label="Price (৳)" required>
            <Input
              id="edit-package-price"
              type="number"
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="14000"
            />
          </FormField>

          <FormField id="edit-package-registration" label="Registration fee (৳)">
            <Input
              id="edit-package-registration"
              type="number"
              min={0}
              value={registrationFee}
              onChange={(e) => setRegistrationFee(e.target.value)}
              placeholder="1000"
            />
          </FormField>

          <FormField id="edit-package-discount" label="Discount (%)" hint="Applied on the package price">
            <Input
              id="edit-package-discount"
              type="number"
              min={0}
              max={100}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="10"
            />
          </FormField>

          {/* Rules */}
          <FormField id="edit-package-duration" label="Package duration" required>
            <Input
              id="edit-package-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 1 month"
            />
          </FormField>

          <FormField id="edit-package-sessions" label="Number of sessions" required>
            <Input
              id="edit-package-sessions"
              type="number"
              min={1}
              value={sessions}
              onChange={(e) => setSessions(e.target.value)}
              placeholder="12"
            />
          </FormField>

          <FormField id="edit-package-expiry" label="Expiry" hint="When unused sessions lapse">
            <Input
              id="edit-package-expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="Last day of the billing month"
            />
          </FormField>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <Button onClick={submit} disabled={submitting}>
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : null}
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
