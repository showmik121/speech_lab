import { useState } from "react";
import { Check, Loader2, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
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
import {
  THERAPY_CATEGORIES,
  THERAPY_STATUSES,
  type TherapyFeeEntry,
} from "@/constants/therapy-types";

export function CreateTherapyDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Active");
  const [description, setDescription] = useState("");
  const [goals, setGoals] = useState("");
  const [fees, setFees] = useState<TherapyFeeEntry[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const close = () => {
    onOpenChange(false);
    setName("");
    setShortName("");
    setCategory("");
    setStatus("Active");
    setDescription("");
    setGoals("");
    setFees([]);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const updateFee = (index: number, field: keyof TherapyFeeEntry, value: string) => {
    setFees((prev) =>
      prev.map((fee, i) =>
        i === index ? { ...fee, [field]: field === "price" ? Number(value) : value } : fee,
      ),
    );
  };

  const addFee = () => setFees((prev) => [...prev, { label: "", price: 0, duration: "" }]);
  const removeFee = (index: number) => setFees((prev) => prev.filter((_, i) => i !== index));

  return (
    <Dialog open={open} onOpenChange={(next) => { if (!next) close(); else onOpenChange(true); }}>
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Add Therapy</DialogTitle>
          <DialogDescription>
            Define a new therapy type, its focus areas, and pricing.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-2 sm:grid-cols-2">
          <FormField id="create-therapy-name" label="Therapy name" required>
            <Input
              id="create-therapy-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Speech & Language Therapy"
            />
          </FormField>

          <FormField id="create-therapy-short" label="Short name / abbreviation">
            <Input
              id="create-therapy-short"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              placeholder="e.g. SLT"
            />
          </FormField>

          <FormField id="create-therapy-category" label="Category" required>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="create-therapy-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {THERAPY_CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField id="create-therapy-status" label="Status" required>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="create-therapy-status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {THERAPY_STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="create-therapy-description"
            label="Description"
            className="sm:col-span-2"
            hint="Shown to guardians and on invoices"
          >
            <Textarea
              id="create-therapy-description"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of this therapy…"
            />
          </FormField>

          <FormField
            id="create-therapy-goals"
            label="Goals / focus areas"
            className="sm:col-span-2"
            hint="One per line"
          >
            <Textarea
              id="create-therapy-goals"
              rows={3}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder={"Speech Delay\nLanguage Delay\nCommunication সমস্যা"}
            />
          </FormField>
        </div>

        {/* Fee tiers */}
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-foreground">Fee tiers</p>
            <Button variant="outline" size="sm" onClick={addFee}>
              <Plus className="h-3.5 w-3.5" />
              Add fee
            </Button>
          </div>
          {fees.map((fee, index) => (
            <div key={index} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2">
              <Input
                value={fee.label}
                onChange={(e) => updateFee(index, "label", e.target.value)}
                placeholder="Label (e.g. Standard session)"
                className="text-[13px]"
              />
              <Input
                type="number"
                min={0}
                value={fee.price}
                onChange={(e) => updateFee(index, "price", e.target.value)}
                placeholder="৳"
                className="w-24 text-[13px]"
              />
              <Input
                value={fee.duration}
                onChange={(e) => updateFee(index, "duration", e.target.value)}
                placeholder="Duration"
                className="w-28 text-[13px]"
              />
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-danger"
                onClick={() => removeFee(index)}
                aria-label="Remove fee tier"
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <Button onClick={submit} disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            Create therapy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
