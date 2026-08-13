import { CheckCircle2, Clock, Copy, Edit3, Lock, ShieldCheck, Video, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import {
  ONLINE_CATEGORY_TONE,
  ONLINE_SERVICE_STATUS_TONE,
  type FixedOnlineService,
} from "@/constants/online-session-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface FixedOnlineServiceCardProps {
  service: FixedOnlineService;
  onEdit: (service: FixedOnlineService) => void;
}

export function FixedOnlineServiceCard({
  service,
  onEdit,
}: FixedOnlineServiceCardProps) {
  const isActive = service.status === "Active";

  const handleCopyLink = () => {
    toast.success("Booking link copied to clipboard!", {
      description: `Direct advance booking link for ${service.name}`,
    });
  };

  const platformBg =
    service.platform === "Google Meet"
      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400"
      : service.platform === "Zoom"
      ? "bg-blue-500/10 text-blue-600 border-blue-500/30 dark:text-blue-400"
      : service.platform === "Microsoft Teams"
      ? "bg-purple-500/10 text-purple-600 border-purple-500/30 dark:text-purple-400"
      : "bg-muted text-muted-foreground border-border";

  return (
    <Card
      interactive
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-2 transition-all duration-200 p-5.5 shadow-md hover:shadow-xl hover:border-primary/50 bg-gradient-to-br from-card via-card to-primary/5",
        !isActive && "opacity-75 bg-muted/30 border-dashed border-border",
      )}
    >
      {/* Top Bar Accent Line */}
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-transparent",
          !isActive && "from-muted-foreground/40",
        )}
        aria-hidden="true"
      />

      <div className="space-y-4">
        {/* Header Tags & Status */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
            {service.id}
          </span>
          <div className="flex items-center gap-2">
            <StatusBadge
              tone={ONLINE_CATEGORY_TONE[service.category] || "info"}
              label={service.category}
              dot={false}
              className="text-[11px] font-semibold"
            />
            <StatusBadge
              tone={ONLINE_SERVICE_STATUS_TONE[service.status]}
              label={service.status}
              className="text-[11px]"
            />
          </div>
        </div>

        {/* Service Title & Platform Badge */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {service.name}
            </h3>
            <span
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-semibold shadow-2xs",
                platformBg,
              )}
            >
              <Video className="h-3.5 w-3.5" />
              {service.platform}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 min-h-[36px]">
            {service.description}
          </p>
        </div>

        {/* Pricing & Duration Banner */}
        <div className="flex items-center justify-between rounded-xl border border-border/80 bg-muted/30 px-3.5 py-3 backdrop-blur-xs">
          <div>
            <span className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
              Session Fee
            </span>
            <p className="text-2xl font-extrabold tracking-tight tabular-nums text-foreground mt-0.5">
              {formatTaka(service.fee)}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1 rounded-lg bg-background border border-border px-2.5 py-1 text-[11.5px] font-semibold text-foreground shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {service.duration}
            </span>
            <span className="text-[10px] text-muted-foreground flex items-center gap-0.5 font-medium">
              <Lock className="h-2.5 w-2.5" /> {service.bookingType}
            </span>
          </div>
        </div>

        {/* Included Telehealth Specifications */}
        <div className="rounded-xl border border-border/60 bg-background/60 p-3 space-y-2 text-[11.5px]">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-semibold uppercase text-[10px] tracking-wider">Tele-Therapy Features</span>
            <span className="text-[10.5px] text-primary font-medium">Auto Meeting Link</span>
          </div>
          <div className="space-y-1 text-foreground/90 font-medium">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 mt-0.5" />
              <span>Instant HD link dispatch to guardian phone & email</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 mt-0.5" />
              <span>Digital evaluation summary & therapist clinical notes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-5 flex items-center justify-between gap-2 border-t border-border/80 pt-3.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyLink}
          className="h-8.5 text-xs text-muted-foreground hover:text-foreground gap-1.5"
          title="Copy booking link"
        >
          <Copy className="h-3.5 w-3.5" />
          Share Link
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(service)}
          className="h-8.5 text-xs font-semibold gap-1.5 border-primary/30 text-primary hover:bg-primary/10 shadow-2xs"
        >
          <Edit3 className="h-3.5 w-3.5" />
          Edit Configuration
        </Button>
      </div>
    </Card>
  );
}
