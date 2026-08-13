import { useEffect, useState } from "react";
import { Lock, Pencil } from "lucide-react";
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
  type FixedOnlineService,
  type OnlineDuration,
  type OnlinePlatform,
  type OnlineServiceStatus,
} from "@/constants/online-session-data";

interface EditOnlineServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: FixedOnlineService | null;
  onSave: (
    id: string,
    data: Partial<Omit<FixedOnlineService, "id" | "bookingType">>,
  ) => void;
}

export function EditOnlineServiceDialog({
  open,
  onOpenChange,
  service,
  onSave,
}: EditOnlineServiceDialogProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("1500");
  const [duration, setDuration] = useState<OnlineDuration | string>("60 Minutes");
  const [platform, setPlatform] = useState<OnlinePlatform>("Google Meet");
  const [status, setStatus] = useState<OnlineServiceStatus>("Active");

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setFee(service.fee.toString());
      setDuration(service.duration);
      setPlatform(service.platform);
      setStatus(service.status);
    }
  }, [service, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service || !name.trim()) return;

    const updatedData = {
      name: name.trim(),
      description: description.trim(),
      fee: Math.max(Number(fee) || 0, 0),
      duration,
      platform,
      status,
    };

    onSave(service.id, updatedData);
    onOpenChange(false);
  };

  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
              <Pencil className="h-4 w-4" />
            </span>
            <div>
              <DialogTitle className="text-lg font-semibold">
                Edit {service.name}
              </DialogTitle>
              <DialogDescription className="text-xs">
                Update service pricing, duration, online meeting platform, and status.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Service Name */}
          <FormField label="Service Display Name" required>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Online Speech Therapy Session"
              className="h-9"
            />
          </FormField>

          {/* Description */}
          <FormField label="Service Description" required>
            <Textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed description of what the patient will receive during this tele-session"
              className="resize-none text-xs"
            />
          </FormField>

          {/* Fee and Duration */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FormField label="Service Fee (BDT ৳)" required>
              <Input
                type="number"
                min="0"
                step="50"
                required
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                placeholder="1500"
                className="h-9 font-semibold"
              />
            </FormField>

            <FormField label="Duration" required>
              <Select
                value={duration}
                onValueChange={(val) => setDuration(val)}
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
          </div>

          {/* Platform and Status */}
          <div className="grid gap-3.5 sm:grid-cols-2">
            <FormField label="Online Platform" required>
              <Select
                value={platform}
                onValueChange={(val) => setPlatform(val as OnlinePlatform)}
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

            <FormField label="Service Status" required>
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

          {/* Payment Type Fixed Notice */}
          <div className="rounded-lg border border-border bg-muted/40 p-3 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-foreground">
              <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Payment Type: Advance / Booking</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Online session services are locked to Advance / Booking payment workflow. Fees are collected in advance prior to session commencement.
            </p>
          </div>

          <DialogFooter className="gap-2 sm:gap-0 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
