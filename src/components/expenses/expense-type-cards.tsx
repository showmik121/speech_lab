import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExpenseFormDialog,
  type ExpenseFormValues,
} from "@/components/expenses/expense-form-dialog";
import { EXPENSE_TYPE_CARDS, type ExpenseTypeCard } from "@/constants/expense-data";

const toneClass: Record<
  ExpenseTypeCard["tone"],
  { icon: string; bar: string; button: string }
> = {
  warning: {
    icon: "bg-warning/15 text-warning",
    bar: "from-warning/70",
    button: "hover:border-warning/40",
  },
  danger: {
    icon: "bg-danger/12 text-danger",
    bar: "from-danger/70",
    button: "hover:border-danger/40",
  },
  info: {
    icon: "bg-info/12 text-info",
    bar: "from-info/70",
    button: "hover:border-info/40",
  },
  primary: {
    icon: "bg-primary/10 text-primary",
    bar: "from-primary/70",
    button: "hover:border-primary/40",
  },
};

function ExpenseTypeCardItem({
  card,
  onAdd,
}: {
  card: ExpenseTypeCard;
  onAdd: (values: ExpenseFormValues) => void;
}) {
  const Icon = card.icon;
  const tone = toneClass[card.tone];
  const buttonLabel = `Add ${card.type}`;

  return (
    <Card
      interactive
      className={cn(
        "relative flex h-full flex-col overflow-hidden p-5",
        tone.button,
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent",
          tone.bar,
        )}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-lg",
              tone.icon,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-foreground">
          {card.type}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          {card.hint}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <ExpenseFormDialog
            mode="create"
            defaultCategory={card.type}
            onSubmit={onAdd}
            trigger={
              <Button size="sm" variant="outline" className="gap-1.5">
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                {buttonLabel}
              </Button>
            }
          />
        </div>
      </div>
    </Card>
  );
}

export function ExpenseTypeCards({
  onAdd,
}: {
  onAdd: (values: ExpenseFormValues) => void;
}) {
  return (
    <section
      aria-label="Expense types"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {EXPENSE_TYPE_CARDS.map((card) => (
        <ExpenseTypeCardItem key={card.type} card={card} onAdd={onAdd} />
      ))}
    </section>
  );
}