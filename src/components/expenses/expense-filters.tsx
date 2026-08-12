import { Columns3, Download, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EXPENSE_CATEGORIES,
  EXPENSE_DATE_RANGES,
  EXPENSE_METHODS,
  EXPENSE_STATUSES,
} from "@/constants/expense-data";
import { EXPENSE_COLUMNS, type ExpenseColumnKey } from "@/components/expenses/expense-columns";

export type ExpenseFilterState = {
  search: string;
  category: string;
  status: string;
  method: string;
  range: string;
};

export const DEFAULT_EXPENSE_FILTERS: ExpenseFilterState = {
  search: "",
  category: "all",
  status: "all",
  method: "all",
  range: "all",
};

export function ExpenseFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
  searchPlaceholder = "Search voucher, description or payee…",
}: {
  value: ExpenseFilterState;
  onChange: (next: ExpenseFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns?: ExpenseColumnKey[];
  onToggleColumn?: (key: ExpenseColumnKey) => void;
  searchPlaceholder?: string;
}) {
  const set = (patch: Partial<ExpenseFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[400px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" aria-hidden="true" />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder={searchPlaceholder}
            aria-label="Search expenses"
            className="h-9 bg-muted/40 pl-9 shadow-none"
          />
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <Button variant="outline" size="sm" onClick={onRefresh} disabled={isRefreshing}>
            <RefreshCw className={isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4"} aria-hidden="true" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" aria-hidden="true" />
            Export
          </Button>
          {visibleColumns && onToggleColumn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Columns3 className="h-4 w-4" aria-hidden="true" />
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {EXPENSE_COLUMNS.filter((column) => column.hideable).map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.key}
                    checked={visibleColumns.includes(column.key)}
                    onCheckedChange={() => onToggleColumn(column.key)}
                    onSelect={(event) => event.preventDefault()}
                  >
                    {column.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <FilterSelect label="category" placeholder="Category" width="w-[180px]" value={value.category} onChange={(next) => set({ category: next })} options={EXPENSE_CATEGORIES} />
        <FilterSelect label="status" placeholder="Status" width="w-[150px]" value={value.status} onChange={(next) => set({ status: next })} options={EXPENSE_STATUSES} />
        <FilterSelect label="payment method" placeholder="Method" width="w-[180px]" value={value.method} onChange={(next) => set({ method: next })} options={EXPENSE_METHODS} />
        <Select value={value.range} onValueChange={(next) => set({ range: next })}>
          <SelectTrigger className="h-9 w-[160px]" aria-label="Filter by date">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent align="start">
            {EXPENSE_DATE_RANGES.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => onChange(DEFAULT_EXPENSE_FILTERS)}>
          Clear
        </Button>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  placeholder,
  width,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  width: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`h-9 ${width}`} aria-label={`Filter by ${label}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent align="start">
        <SelectItem value="all">All {label}s</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}