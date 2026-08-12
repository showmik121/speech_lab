import {
  Activity,
  Brain,
  Hand,
  Layers,
  MoreHorizontal,
  PencilLine,
  Power,
  Sparkles,
  Users,
  User,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import {
  THERAPY_CATEGORY_TONE,
  THERAPY_STATUS_TONE,
  type TherapyCategory,
  type TherapyType,
} from "@/constants/therapy-types";

const CATEGORY_ICON: Record<TherapyCategory, LucideIcon> = {
  "Speech & Language": Activity,
  Behavioural: Brain,
  Occupational: Hand,
  Sensory: Zap,
  Individual: User,
  Group: Users,
  Other: Sparkles,
};

export function TherapyCard({
  item,
  onEdit,
}: {
  item: TherapyType;
  onEdit?: (item: TherapyType) => void;
}) {
  const Icon = CATEGORY_ICON[item.category];

  return (
    <Card interactive className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-semibold tracking-tight text-foreground">
              {item.name}
            </h3>
            <p className="truncate font-mono text-[12px] text-muted-foreground">
              {item.shortName} · {item.code}
            </p>
          </div>
        </div>
        <TherapyActions item={item} onEdit={onEdit} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StatusBadge tone={THERAPY_CATEGORY_TONE[item.category]} label={item.category} dot={false} />
        <StatusBadge tone={THERAPY_STATUS_TONE[item.status]} label={item.status} />
      </div>

      <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      {/* Goals */}
      {item.goals.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.goals.map((goal) => (
            <span
              key={goal}
              className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-[11.5px] font-medium text-muted-foreground"
            >
              {goal}
            </span>
          ))}
        </div>
      )}

      {/* Fees */}
      {item.fees.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-border pt-4">
          {item.fees.map((fee) => (
            <div key={fee.label} className="flex items-center justify-between gap-2">
              <span className="text-[12.5px] text-muted-foreground">{fee.label}</span>
              <span className="flex items-center gap-2">
                <span className="text-[15px] font-semibold tabular-nums text-foreground">
                  {formatTaka(fee.price)}
                </span>
                <span className="rounded bg-muted/60 px-1.5 py-0.5 text-[11px] text-muted-foreground">
                  {fee.duration}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
          {item.fees.length} fee tier{item.fees.length !== 1 ? "s" : ""}
        </span>
        <Button variant="outline" size="sm" onClick={() => onEdit?.(item)}>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </Button>
      </div>
    </Card>
  );
}

function TherapyActions({
  item,
  onEdit,
}: {
  item: TherapyType;
  onEdit?: (item: TherapyType) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="shrink-0 text-muted-foreground"
          aria-label={`Actions for ${item.name}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onSelect={() => onEdit?.(item)}>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit therapy
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={cn(item.status === "Active" && "text-danger")}>
          <Power className="h-4 w-4" aria-hidden="true" />
          {item.status === "Active" ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
