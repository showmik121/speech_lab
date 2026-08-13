import { useState } from "react";
import { Lock, Plus, Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
  AVAILABLE_DURATIONS,
  AVAILABLE_PLATFORMS,
  AVAILABLE_STATUSES,
  SERVICE_CATEGORIES,
  type FixedOnlineService,
  type OnlineDuration,
  type OnlinePlatform,
  type OnlineServiceStatus,
} from "@/constants/online-session-data";

interface CreateOnlineServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (serviceData: Omit<FixedOnlineService, "id" | "bookingType">) => void;
}

export function CreateOnlineServiceDialog({
  open,
  onOpenChange,
  onCreate,
}: CreateOnlineServiceDialogProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Online Session");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("1500");
  const [duration, setDuration] = useState<OnlineDuration | string>("60 Minutes");
  const [customDuration, setCustomDuration] = useState("");
  const [platform, setPlatform] = useState<OnlinePlatform>("Google Meet");
  const [status, setStatus] = useState<OnlineServiceStatus>("Active");

  // Error state for validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Service Name is required.";
    if (!category.trim()) errs.category = "Service Category is required.";
    if (!description.trim()) errs.description = "Description is required.";

    const feeNum = Number(fee);
    if (!fee || isNaN(feeNum) || feeNum <= 0) {
      errs.fee = "Service Fee must be a valid number greater than 0.";
    }

    if (!duration) errs.duration = "Duration is required.";
    if (duration === "Custom" && !customDuration.trim()) {
      errs.customDuration = "Please specify the custom duration.";
    }

    if (!platform) errs.platform = "Online Platform is required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after short delay
    setTimeout(() => {
      setName("");
      setCategory("Online Session");
      setDescription("");
      setFee("1500");
      setDuration("60 Minutes");
      setCustomDuration("");
      setPlatform("Google Meet");
      setStatus("Active");
      setErrors({});
    }, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const finalDuration = duration === "Custom" ? customDuration.trim() : duration;

    onCreate({
      name: name.trim(),
      category: category.trim(),
      description: description.trim(),
      fee: Math.max(Number(fee) || 0, 0),
      duration: finalDuration,
      platform,
      status,
    });

    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[580px]">
        <DialogHeader>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
              <Plus className="h-4 w-4" />
            </span>
            <div>
              <DialogTitle className="text-lg font-semibold">
                Create Online Service
              </DialogTitle>
              <DialogDescription className="text-xs">
                Add a new online service for advance/booking payment.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Service Name */}
          <FormField
            label="Service Name"
            required
            error={errors.name}
          >
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="e.g. Online Speech Therapy Session"
              className="h-9"
            />
          </FormField>

          {/* Category and Service Fee */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FormField
              label="Service Category"
              required
              error={errors.category}
            >
              <Select
                value={category}
                onValueChange={(val) => {
                  setCategory(val);
                  if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
                }}
              >
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              label="Service Fee (BDT ৳)"
              required
              error={errors.fee}
            >
              <Input
                type="number"
                min="1"
                step="50"
                value={fee}
                onChange={(e) => {
                  setFee(e.target.value);
                  if (errors.fee) setErrors((prev) => ({ ...prev, fee: "" }));
                }}
                placeholder="1500"
                className="h-9 font-semibold"
              />
            </FormField>
          </div>

          {/* Description */}
          <FormField
            label="Description"
            required
            error={errors.description}
          >
            <Textarea
              rows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)}
              }
              placeholder="Online speech therapy session conducted remotely through an online meeting platform."
              className="resize-none text-xs"
            />
          </FormField>

          {/* Duration and Platform */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FormField
              label="Duration"
              required
              error={errors.duration}
            >
              <Select
                value={duration}
                onValueChange={(val) => {
                  setDuration(val);
                  if (errors.duration) setErrors((prev) => ({ ...prev, duration: "" }));
                }}
              >
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_DURATIONS.map((dur) => (
                    <SelectItem key={dur} value={dur}>
                      {dur}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField
              label="Online Platform"
              required
              error={errors.platform}
            >
              <Select
                value={platform}
                onValueChange={(val) => {
                  setPlatform(val as OnlinePlatform);
                  if (errors.platform) setErrors((prev) => ({ ...prev, platform: "" }));
                }}
              >
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_PLATFORMS.map((plat) => (
                    <SelectItem key={plat} value={plat}>
                      {plat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          </div>

          {/* Conditional Custom Duration */}
          {duration === "Custom" && (
            <FormField
              label="Custom Duration"
              required
              error={errors.customDuration}
            >
              <Input
                value={customDuration}
                onChange={(e) => {
                  setCustomDuration(e.target.value);
                  if (errors.customDuration) setErrors((prev) => ({ ...prev, customDuration: "" }));
                }}
                placeholder="e.g. 75 Minutes or 2 Hours"
                className="h-9"
              />
            </FormField>
          )}

          {/* Payment Type and Status */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FormField label="Payment Type">
              <div className="flex h-9 items-center justify-between rounded-md border border-border bg-muted/50 px-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Advance / Booking</span>
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </FormField>

            <FormField label="Status" required>
              <Select
                value={status}
                onValueChange={(val) => setStatus(val as OnlineServiceStatus)}
              >
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_STATUSES.map((st) => (
                    <SelectItem key={st} value={st}>
                      {st}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type="submit">
              Create Service
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
