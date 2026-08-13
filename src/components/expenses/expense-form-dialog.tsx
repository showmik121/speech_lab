import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EXPENSE_CATEGORIES,
  EXPENSE_METHODS,
  EXPENSE_STATUSES,
  type ExpenseCategory,
  type ExpenseMethod,
  type ExpenseRecord,
  type ExpenseStatus,
} from "@/constants/expense-data";

export type ExpenseFormValues = {
  category: ExpenseCategory;
  description: string;
  amount: string;
  method: ExpenseMethod;
  paidTo: string;
  date: string;
  status: ExpenseStatus;
  remarks: string;
  recurring: boolean;
};

function getFreshEmptyForm(defaultCategory?: ExpenseCategory): ExpenseFormValues {
  const todayDate = new Date().toISOString().slice(0, 10);
  return {
    category: defaultCategory || "Other",
    description: "",
    amount: "",
    method: "Cash",
    paidTo: "",
    date: todayDate,
    status: "Pending",
    remarks: "",
    recurring: false,
  };
}

function toFormValues(record?: ExpenseRecord, defaultCategory?: ExpenseCategory): ExpenseFormValues {
  if (!record) {
    return getFreshEmptyForm(defaultCategory);
  }
  return {
    category: record.category,
    description: record.description,
    amount: String(record.amount),
    method: record.method,
    paidTo: record.paidTo,
    date: record.date || new Date().toISOString().slice(0, 10),
    status: record.status,
    remarks: record.remarks,
    recurring: record.recurring,
  };
}

export function ExpenseFormDialog({
  mode,
  record,
  defaultCategory,
  onSubmit,
  trigger,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: {
  mode: "create" | "edit";
  record?: ExpenseRecord;
  defaultCategory?: ExpenseCategory;
  onSubmit: (values: ExpenseFormValues) => void;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = (next: boolean) => {
    setInternalOpen(next);
    controlledOnOpenChange?.(next);
  };
  const [values, setValues] = useState<ExpenseFormValues>(() =>
    toFormValues(record, defaultCategory),
  );

  useEffect(() => {
    if (open) setValues(toFormValues(record, defaultCategory));
  }, [open, record, defaultCategory]);

  const set = <K extends keyof ExpenseFormValues>(key: K, value: ExpenseFormValues[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    onSubmit(values);
    setOpen(false);
  };

  const isEdit = mode === "edit";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button>
            <Plus className="h-4 w-4" aria-hidden="true" />
            {isEdit ? "Edit Expense" : "Add Expense"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? `Edit ${record?.voucherNo ?? "Expense"}` : "Add New Expense"}</DialogTitle>
          <DialogDescription>
            Fill in the expense details below. Amounts are in Bangladeshi Taka (BDT).
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="expense-category">Category</Label>
              <Select value={values.category} onValueChange={(next) => set("category", next as ExpenseCategory)}>
                <SelectTrigger id="expense-category" className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {EXPENSE_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expense-amount">Amount (BDT)</Label>
              <Input
                id="expense-amount"
                type="number"
                min="0"
                placeholder="e.g. 5000"
                value={values.amount}
                onChange={(event) => set("amount", event.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-description">Description</Label>
            <Input
              id="expense-description"
              placeholder="What was this expense for?"
              value={values.description}
              onChange={(event) => set("description", event.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="expense-paid-to">Paid To</Label>
              <Input
                id="expense-paid-to"
                placeholder="Vendor or payee name"
                value={values.paidTo}
                onChange={(event) => set("paidTo", event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expense-date">Date</Label>
              <Input
                id="expense-date"
                type="date"
                value={values.date}
                onChange={(event) => set("date", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="expense-method">Payment Method</Label>
              <Select value={values.method} onValueChange={(next) => set("method", next as ExpenseMethod)}>
                <SelectTrigger id="expense-method" className="w-full">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  {EXPENSE_METHODS.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expense-status">Status</Label>
              <Select value={values.status} onValueChange={(next) => set("status", next as ExpenseStatus)}>
                <SelectTrigger id="expense-status" className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {EXPENSE_STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expense-remarks">Remarks</Label>
            <Textarea
              id="expense-remarks"
              placeholder="Optional notes"
              value={values.remarks}
              onChange={(event) => set("remarks", event.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="expense-recurring"
              checked={values.recurring}
              onCheckedChange={(checked) => set("recurring", checked === true)}
            />
            <Label htmlFor="expense-recurring" className="font-normal">
              Recurring expense (e.g. monthly rent, salaries)
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>{isEdit ? "Save Changes" : "Add Expense"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}