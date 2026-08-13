import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, ReceiptText } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { TablePagination } from "@/components/tables/table-pagination";
import { ExpenseTypeCards } from "@/components/expenses/expense-type-cards";
import {
  DEFAULT_EXPENSE_FILTERS,
  ExpenseFilters,
  type ExpenseFilterState,
} from "@/components/expenses/expense-filters";
import {
  DEFAULT_EXPENSE_COLUMNS,
  type ExpenseColumnKey,
} from "@/components/expenses/expense-columns";
import {
  ExpenseFormDialog,
  type ExpenseFormValues,
} from "@/components/expenses/expense-form-dialog";
import {
  ExpenseTable,
  type ExpenseSort,
} from "@/components/expenses/expense-table";
import {
  EXPENSE_RECORDS,
  EXPENSES_TODAY_ISO,
  type ExpenseRecord,
} from "@/constants/expense-data";

import { useExpenseStore } from "@/lib/expense-store";

const PAGE_SIZE = 8;
const TODAY = new Date(EXPENSES_TODAY_ISO);

const TITLE = "Expense — Speech Therapy ERP";
const DESCRIPTION =
  "Track branch expenses, manage approvals and monitor spending in BDT.";

export const Route = createFileRoute("/manager/expense/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExpensePage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  const days = range === "7d" ? 7 : 30;
  return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1000;
}

function ExpensePage() {
  const { expenses: records, addExpense, deleteExpense, updateExpense } = useExpenseStore();
  const [filters, setFilters] = useState<ExpenseFilterState>(DEFAULT_EXPENSE_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<ExpenseColumnKey[]>(
    DEFAULT_EXPENSE_COLUMNS,
  );
  const [sort, setSort] = useState<ExpenseSort>({
    key: "date",
    direction: "desc",
  });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [editingRecord, setEditingRecord] = useState<ExpenseRecord | undefined>();

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const sorted = records
      .filter((record) => {
        const matchesQuery =
          !query ||
          [record.voucherNo, record.description, record.paidTo, record.category]
            .join(" ")
            .toLowerCase()
            .includes(query);

        return (
          matchesQuery &&
          (filters.category === "all" || record.category === filters.category) &&
          (filters.status === "all" || record.status === filters.status) &&
          (filters.method === "all" || record.method === filters.method) &&
          withinRange(record.date, filters.range)
        );
      })
      .sort((a, b) => {
        const direction = sort.direction === "asc" ? 1 : -1;
        const aValue = a[sort.key];
        const bValue = b[sort.key];
        if (typeof aValue === "number" && typeof bValue === "number") {
          return (aValue - bValue) * direction;
        }
        return String(aValue).localeCompare(String(bValue)) * direction;
      });
    return sorted;
  }, [filters, sort, records]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 700);
  };

  const toggleColumn = (key: ExpenseColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const handleSort = (key: ExpenseSort["key"]) =>
    setSort((current) =>
      current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );

  const toggleRow = (id: string) =>
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  const toggleAll = () => {
    if (selectedIds.length === rows.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(rows.map((row) => row.id));
    }
  };

  const handleCreate = (values: ExpenseFormValues) => {
    addExpense({
      category: values.category,
      description: values.description,
      amount: Number(values.amount) || 0,
      method: values.method,
      paidTo: values.paidTo,
      date: values.date,
      recordedBy: "Nusrat Jahan (Manager)",
      status: values.status,
      remarks: values.remarks,
      recurring: values.recurring,
    });
    setPage(1);
  };

  const handleEditSave = (values: ExpenseFormValues) => {
    if (!editingRecord) return;
    updateExpense({
      ...editingRecord,
      category: values.category,
      description: values.description,
      amount: Number(values.amount) || 0,
      method: values.method,
      paidTo: values.paidTo,
      date: values.date,
      status: values.status,
      remarks: values.remarks,
      recurring: values.recurring,
    });
    setEditingRecord(undefined);
  };

  const handleDelete = (record: ExpenseRecord) => {
    deleteExpense(record.id);
    setSelectedIds((current) => current.filter((id) => id !== record.id));
  };

  const resetFiltersButton = (
    <Button variant="ghost" onClick={() => setFilters(DEFAULT_EXPENSE_FILTERS)}>
      Reset filters
    </Button>
  );

  const addExpenseButton = (
    <ExpenseFormDialog
      mode="create"
      onSubmit={handleCreate}
      trigger={
        <Button>
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add Expense
        </Button>
      }
    />
  );

  const editDialog =
    editingRecord !== undefined ? (
      <ExpenseFormDialog
        key={editingRecord.id}
        mode="edit"
        record={editingRecord}
        onSubmit={handleEditSave}
        trigger={null}
        open={editingRecord !== undefined}
        onOpenChange={(next) => {
          if (!next) setEditingRecord(undefined);
        }}
      />
    ) : null;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Expense"
        description="Track branch expenses, manage approvals and monitor spending."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Expense" },
        ]}
        actions={addExpenseButton}
      />

      <ExpenseTypeCards onAdd={handleCreate} />

      <section
        aria-label="Expense list"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <ExpenseFilters
          value={filters}
          onChange={(next) => {
            setFilters(next);
            setPage(1);
          }}
          onRefresh={refresh}
          isRefreshing={refreshing}
          visibleColumns={visibleColumns}
          onToggleColumn={toggleColumn}
        />

        {rows.length === 0 ? (
          <EmptyState
            icon={ReceiptText}
            title="No Expenses Yet"
            description="Record your first expense to start tracking branch spending."
            action={addExpenseButton}
            secondaryAction={resetFiltersButton}
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <ExpenseTable
              records={rows}
              visibleColumns={visibleColumns}
              sort={sort}
              onSort={handleSort}
              selectedIds={selectedIds}
              onToggleRow={toggleRow}
              onToggleAll={toggleAll}
              onView={(record) => console.info("View expense", record.voucherNo)}
              onEdit={setEditingRecord}
              onDelete={handleDelete}
            />
            <div className="border-t border-border px-4 py-3.5 sm:px-5">
              <TablePagination
                page={currentPage}
                pageSize={PAGE_SIZE}
                total={filtered.length}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </section>

      {editDialog}
    </div>
  );
}
