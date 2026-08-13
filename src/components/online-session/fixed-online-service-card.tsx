import { Clock, Pencil, ShieldCheck, Video, Wallet } from "lucide-react";
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

interface FixedOnlineServiceCardProps {
  service: FixedOnlineService;
  onEdit: (service: FixedOnlineService) => void;
}

export function FixedOnlineServiceCard({
  service,
  onEdit,
}: FixedOnlineServiceCardProps) {
  const isActive = service.status === "Active";

  return (
    <Card
      interactive
      className={cn(
        "group flex h-full flex-col justify-between overflow-hidden border border-border bg-card p-5 transition-enterprise hover:border-primary/40 hover:shadow-card-hover",
        !isActive && "opacity-80 bg-muted/20",
      )}
    >
      {/* Top Header & Content */}
      <div className="space-y-4">
        {/* Category & Status Badges */}
        <div className="flex items-center justify-between gap-2">
          <StatusBadge
            tone={ONLINE_CATEGORY_TONE[service.category] || "info"}
            label={service.category}
            dot={false}
            className="text-[11px] font-medium"
          />
          <StatusBadge
            tone={ONLINE_SERVICE_STATUS_TONE[service.status]}
            label={service.status}
            className="text-[11px]"
          />
        </div>

        {/* Service Name */}
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3 min-h-[48px]">
            {service.description}
          </p>
        </div>

        {/* Pricing Strip */}
        <div className="flex items-center justify-between rounded-lg bg-muted/40 px-3.5 py-2.5">
          <span className="text-xs font-medium text-muted-foreground">Service Fee</span>
          <div className="text-right">
            <span className="text-base font-bold tabular-nums text-primary">
              {formatTaka(service.fee)}
            </span>
          </div>
        </div>

        {/* Service Specifications List */}
        <div className="space-y-2 rounded-lg border border-border/70 bg-background/50 p-3 text-xs">
          {/* Duration */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary/70" />
              Duration
            </span>
            <span className="font-medium text-foreground">{service.duration}</span>
          </div>

          {/* Platform */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Video className="h-3.5 w-3.5 text-primary/70" />
              Online Platform
            </span>
            <span className="font-medium text-foreground">{service.platform}</span>
          </div>

          {/* Booking / Payment Type */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Wallet className="h-3.5 w-3.5 text-primary/70" />
              Payment Type
            </span>
            <Badge
              variant="outline"
              className="text-[10px] py-0 px-1.5 font-medium border-primary/25 text-primary bg-primary/5"
            >
              {service.bookingType}
            </Badge>
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="mt-5 border-t border-border pt-3.5">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(service)}
          className="w-full gap-2 text-xs h-9 font-medium shadow-2xs hover:bg-primary/5 hover:text-primary hover:border-primary/40"
        >
          <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
          Edit
        </Button>
      </div>
    </Card>
  );
}
