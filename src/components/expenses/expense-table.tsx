import { ChevronDown, ChevronUp, ChevronsUpDown, MoreHorizontal } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import { EXPENSE_CATEGORY_TONE, EXPENSE_STATUS_TONE, type ExpenseRecord } from "@/constants/expense-data";
import { EXPENSE_COLUMNS, type ExpenseColumnKey } from "@/components/expenses/expense-columns";

export type ExpenseSortKey = ExpenseColumnKey;

export type ExpenseSort = {
  key: ExpenseSortKey;
  direction: "asc" | "desc";
};

export function ExpenseTable({
  records,
  visibleColumns,
  sort,
  onSort,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onView,
  onEdit,
  onDelete,
}: {
  records: ExpenseRecord[];
  visibleColumns: ExpenseColumnKey[];
  sort: ExpenseSort;
  onSort: (key: ExpenseSortKey) => void;
  selectedIds: string[];
  onToggleRow: (id: string) => void;
  onToggleAll: () => void;
  onView: (record: ExpenseRecord) => void;
  onEdit: (record: ExpenseRecord) => void;
  onDelete: (record: ExpenseRecord) => void;
}) {
  const allSelected = records.length > 0 && records.every((r) => selectedIds.includes(r.id));
  const someSelected = records.some((r) => selectedIds.includes(r.id));

  const sortIcon = (key: ExpenseColumnKey) => {
    if (sort.key !== key) return <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden="true" />;
    return sort.direction === "asc" ? <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" /> : <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />;
  };

  const columns = EXPENSE_COLUMNS.filter((c) => visibleColumns.includes(c.key));

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[44px]">
              <Checkbox checked={allSelected || (someSelected ? "indeterminate" : false)} onCheckedChange={onToggleAll} aria-label="Select all expenses" />
            </TableHead>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.align === "right" ? "text-right" : undefined}>
                <button type="button" className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground" onClick={() => onSort(column.key)}>
                  {column.label}
                  {sortIcon(column.key)}
                </button>
              </TableHead>
            ))}
            <TableHead className="w-[48px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + 2} className="h-24 text-center text-muted-foreground">
                No expenses found. Try adjusting your filters.
              </TableCell>
            </TableRow>
          ) : (
            records.map((record) => (
              <TableRow key={record.id} className={selectedIds.includes(record.id) ? "bg-muted/40" : undefined}>
                <TableCell>
                  <Checkbox checked={selectedIds.includes(record.id)} onCheckedChange={() => onToggleRow(record.id)} aria-label={`Select ${record.voucherNo}`} />
                </TableCell>
                {visibleColumns.includes("voucherNo") && <TableCell className="font-medium">{record.voucherNo}</TableCell>}
                {visibleColumns.includes("category") && (
                  <TableCell>
                    <StatusBadge tone={EXPENSE_CATEGORY_TONE[record.category]} label={record.category} />
                  </TableCell>
                )}
                {visibleColumns.includes("description") && (
                  <TableCell className="max-w-[260px]">
                    <p className="truncate font-medium text-foreground">{record.description}</p>
                    {record.recurring ? <p className="text-xs text-muted-foreground">Recurring</p> : null}
                  </TableCell>
                )}
                {visibleColumns.includes("amount") && <TableCell className="text-right font-semibold tabular-nums">{formatTaka(record.amount)}</TableCell>}
                {visibleColumns.includes("method") && <TableCell className="text-muted-foreground">{record.method}</TableCell>}
                {visibleColumns.includes("paidTo") && <TableCell className="text-muted-foreground">{record.paidTo}</TableCell>}
                {visibleColumns.includes("date") && (
                  <TableCell className="whitespace-nowrap text-muted-foreground">
                    {new Date(record.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </TableCell>
                )}
                {visibleColumns.includes("recordedBy") && <TableCell className="text-muted-foreground">{record.recordedBy}</TableCell>}
                {visibleColumns.includes("status") && (
                  <TableCell>
                    <StatusBadge tone={EXPENSE_STATUS_TONE[record.status]} label={record.status} />
                  </TableCell>
                )}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Actions for ${record.voucherNo}`}>
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuLabel>{record.voucherNo}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onSelect={() => onView(record)}>View details</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => onEdit(record)}>Edit</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:text-destructive" onSelect={() => onDelete(record)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}