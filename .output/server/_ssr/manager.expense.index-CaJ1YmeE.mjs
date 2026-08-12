import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PackagePlus, At as Ellipsis, Ft as Columns3, K as Plus, Kt as ChevronUp, P as Search, V as ReceiptText, Wt as ChevronsUpDown, Yt as ChevronDown, jt as Download, nn as CalendarDays, r as Wrench, rn as CalendarClock, z as RefreshCw } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { a as DropdownMenuLabel, i as DropdownMenuItem, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-D7smgkyF.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { t as StatusBadge } from "./status-badge-Dga_qCN3.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { t as EmptyState } from "./empty-state-Cu0SfqSK.mjs";
import { t as TablePagination } from "./table-pagination-BKPw96XE.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.expense.index-CaJ1YmeE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Static demo data for the Expense module.
* Frontend only — the Django REST API will own these payloads later.
* All money values are Bangladeshi Taka (BDT).
*/
var EXPENSES_TODAY_ISO = "2026-07-31";
var EXPENSE_STATUS_TONE = {
	Paid: "success",
	Pending: "warning",
	Approved: "info",
	Rejected: "danger"
};
var EXPENSE_CATEGORY_TONE = {
	"Daily Expense": "warning",
	"Monthly Expense": "danger",
	Maintenance: "info",
	Equipment: "primary",
	Rent: "info",
	Utilities: "warning",
	"Salaries & Wages": "success",
	"Equipment & Maintenance": "info",
	"Therapy Supplies": "primary",
	"Marketing & Advertising": "warning",
	"Transport & Fuel": "neutral",
	"Office Supplies": "neutral",
	"Training & Development": "info",
	Other: "neutral"
};
var EXPENSE_CATEGORIES = [
	"Daily Expense",
	"Monthly Expense",
	"Maintenance",
	"Equipment",
	"Rent",
	"Utilities",
	"Salaries & Wages",
	"Equipment & Maintenance",
	"Therapy Supplies",
	"Marketing & Advertising",
	"Transport & Fuel",
	"Office Supplies",
	"Training & Development",
	"Other"
];
var EXPENSE_STATUSES = [
	"Paid",
	"Pending",
	"Approved",
	"Rejected"
];
var EXPENSE_METHODS = [
	"Cash",
	"Card",
	"Mobile Banking",
	"Bank Transfer"
];
var EXPENSE_DATE_RANGES = [
	{
		key: "all",
		label: "All dates"
	},
	{
		key: "today",
		label: "Today"
	},
	{
		key: "7d",
		label: "Last 7 days"
	},
	{
		key: "30d",
		label: "Last 30 days"
	}
];
var EXPENSE_RECORDS = [
	{
		id: "exp-001",
		voucherNo: "EXP-2026-0001",
		category: "Rent",
		description: "Monthly branch rent — July 2026",
		amount: 85e3,
		method: "Bank Transfer",
		paidTo: "Mirpur Property Ltd.",
		date: "2026-07-01",
		recordedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		remarks: "Paid on the 1st as per lease agreement.",
		recurring: true
	},
	{
		id: "exp-002",
		voucherNo: "EXP-2026-0002",
		category: "Utilities",
		description: "Electricity bill — DESCO June 2026",
		amount: 12400,
		method: "Mobile Banking",
		paidTo: "DESCO",
		date: "2026-07-03",
		recordedBy: "Sadia Afrin (Front Desk)",
		status: "Paid",
		remarks: "Two AC units running during peak hours.",
		recurring: true
	},
	{
		id: "exp-003",
		voucherNo: "EXP-2026-0003",
		category: "Salaries & Wages",
		description: "Staff salaries — June 2026 payroll",
		amount: 245e3,
		method: "Bank Transfer",
		paidTo: "Branch Staff (8 members)",
		date: "2026-07-05",
		recordedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		remarks: "Includes 3 therapists, 2 front desk, 1 cleaner, 2 interns.",
		recurring: true
	},
	{
		id: "exp-004",
		voucherNo: "EXP-2026-0004",
		category: "Therapy Supplies",
		description: "Speech cards and flash card restock",
		amount: 18500,
		method: "Card",
		paidTo: "Therapy Mart BD",
		date: "2026-07-08",
		recordedBy: "Tanvir Hasan (Manager)",
		status: "Approved",
		remarks: "Ordered 12 new articulation card decks.",
		recurring: false
	},
	{
		id: "exp-005",
		voucherNo: "EXP-2026-0005",
		category: "Utilities",
		description: "Internet & phone bill — July 2026",
		amount: 3200,
		method: "Mobile Banking",
		paidTo: "Link3 Technologies",
		date: "2026-07-10",
		recordedBy: "Sadia Afrin (Front Desk)",
		status: "Paid",
		remarks: "Fiber connection + landline.",
		recurring: true
	},
	{
		id: "exp-006",
		voucherNo: "EXP-2026-0006",
		category: "Equipment & Maintenance",
		description: "AC servicing — 2 units",
		amount: 4500,
		method: "Cash",
		paidTo: "CoolTech Services",
		date: "2026-07-12",
		recordedBy: "Tanvir Hasan (Manager)",
		status: "Paid",
		remarks: "Gas refill and filter cleaning.",
		recurring: false
	},
	{
		id: "exp-007",
		voucherNo: "EXP-2026-0007",
		category: "Marketing & Advertising",
		description: "Facebook ad campaign — July boost",
		amount: 8e3,
		method: "Card",
		paidTo: "Meta Ads",
		date: "2026-07-14",
		recordedBy: "Nusrat Jahan (Manager)",
		status: "Pending",
		remarks: "Targeting guardians in Mirpur & Pallabi.",
		recurring: true
	},
	{
		id: "exp-008",
		voucherNo: "EXP-2026-0008",
		category: "Transport & Fuel",
		description: "Outdoor therapy visit fuel — July",
		amount: 5600,
		method: "Cash",
		paidTo: "Fuel Station (Mirpur 10)",
		date: "2026-07-16",
		recordedBy: "Tanvir Hasan (Manager)",
		status: "Paid",
		remarks: "12 home visits completed this month.",
		recurring: true
	},
	{
		id: "exp-009",
		voucherNo: "EXP-2026-0009",
		category: "Office Supplies",
		description: "Printer paper, folders and stationery",
		amount: 2400,
		method: "Cash",
		paidTo: "Stationery House",
		date: "2026-07-18",
		recordedBy: "Sadia Afrin (Front Desk)",
		status: "Paid",
		remarks: "Monthly office consumables.",
		recurring: false
	},
	{
		id: "exp-010",
		voucherNo: "EXP-2026-0010",
		category: "Training & Development",
		description: "Online CPD course — 2 therapists",
		amount: 12e3,
		method: "Bank Transfer",
		paidTo: "Speech Therapy Academy",
		date: "2026-07-20",
		recordedBy: "Nusrat Jahan (Manager)",
		status: "Approved",
		remarks: "Pediatric feeding disorders certification.",
		recurring: false
	},
	{
		id: "exp-011",
		voucherNo: "EXP-2026-0011",
		category: "Equipment & Maintenance",
		description: "Therapy mirror replacement",
		amount: 6800,
		method: "Card",
		paidTo: "Kids Therapy Store",
		date: "2026-07-22",
		recordedBy: "Tanvir Hasan (Manager)",
		status: "Paid",
		remarks: "Wall-mounted mirror for articulation work.",
		recurring: false
	},
	{
		id: "exp-012",
		voucherNo: "EXP-2026-0012",
		category: "Utilities",
		description: "Water bill — WASA July 2026",
		amount: 1850,
		method: "Mobile Banking",
		paidTo: "Dhaka WASA",
		date: "2026-07-24",
		recordedBy: "Sadia Afrin (Front Desk)",
		status: "Paid",
		remarks: "Quarterly connection charge included.",
		recurring: true
	},
	{
		id: "exp-013",
		voucherNo: "EXP-2026-0013",
		category: "Therapy Supplies",
		description: "Sensory toys and puzzle sets",
		amount: 14200,
		method: "Mobile Banking",
		paidTo: "Play & Learn BD",
		date: "2026-07-26",
		recordedBy: "Tanvir Hasan (Manager)",
		status: "Pending",
		remarks: "Awaiting delivery confirmation.",
		recurring: false
	},
	{
		id: "exp-014",
		voucherNo: "EXP-2026-0014",
		category: "Marketing & Advertising",
		description: "Print flyers & banners",
		amount: 5200,
		method: "Cash",
		paidTo: "Print Zone",
		date: "2026-07-28",
		recordedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		remarks: "500 flyers for school outreach.",
		recurring: false
	},
	{
		id: "exp-015",
		voucherNo: "EXP-2026-0015",
		category: "Salaries & Wages",
		description: "Part-time cleaner — July 2026",
		amount: 6e3,
		method: "Cash",
		paidTo: "Rina Begum",
		date: "2026-07-30",
		recordedBy: "Sadia Afrin (Front Desk)",
		status: "Paid",
		remarks: "Daily cleaning shift.",
		recurring: true
	}
];
var TODAY$1 = /* @__PURE__ */ new Date(EXPENSES_TODAY_ISO);
function isExpenseToday(date) {
	return new Date(date).toDateString() === TODAY$1.toDateString();
}
function isExpenseThisMonth(date) {
	const value = new Date(date);
	return value.getMonth() === TODAY$1.getMonth() && value.getFullYear() === TODAY$1.getFullYear();
}
var sumBy = (predicate, pick) => EXPENSE_RECORDS.filter(predicate).reduce((total, record) => total + pick(record), 0);
var countBy = (predicate) => EXPENSE_RECORDS.filter(predicate).length;
var TODAYS_EXPENSE = sumBy((record) => isExpenseToday(record.date) && record.status !== "Rejected", (record) => record.amount);
var MONTHLY_EXPENSE = sumBy((record) => isExpenseThisMonth(record.date) && record.status !== "Rejected", (record) => record.amount);
countBy((record) => record.status === "Pending" || record.status === "Approved");
countBy((record) => record.recurring);
formatTaka(TODAYS_EXPENSE), formatTaka(MONTHLY_EXPENSE);
EXPENSE_CATEGORIES.map((category) => {
	return {
		category,
		total: sumBy((record) => record.category === category && record.status !== "Rejected", (record) => record.amount),
		count: countBy((record) => record.category === category)
	};
}).filter((item) => item.count > 0);
EXPENSE_METHODS.map((method) => ({
	method,
	amount: sumBy((record) => record.method === method && record.status !== "Rejected", (record) => record.amount)
})).filter((item) => item.amount > 0);
var EXPENSE_TYPE_CARDS = [
	{
		type: "Daily Expense",
		icon: CalendarDays,
		tone: "warning",
		hint: "Day-to-day routine spending"
	},
	{
		type: "Monthly Expense",
		icon: CalendarClock,
		tone: "danger",
		hint: "Recurring monthly commitments"
	},
	{
		type: "Maintenance",
		icon: Wrench,
		tone: "info",
		hint: "Repairs and branch upkeep"
	},
	{
		type: "Equipment",
		icon: PackagePlus,
		tone: "primary",
		hint: "New equipment and supplies"
	}
];
var EMPTY_FORM = {
	category: "Other",
	description: "",
	amount: "",
	method: "Cash",
	paidTo: "",
	date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	status: "Pending",
	remarks: "",
	recurring: false
};
function toFormValues(record, defaultCategory) {
	if (!record) return defaultCategory ? {
		...EMPTY_FORM,
		category: defaultCategory
	} : EMPTY_FORM;
	return {
		category: record.category,
		description: record.description,
		amount: String(record.amount),
		method: record.method,
		paidTo: record.paidTo,
		date: record.date,
		status: record.status,
		remarks: record.remarks,
		recurring: record.recurring
	};
}
function ExpenseFormDialog({ mode, record, defaultCategory, onSubmit, trigger, open: controlledOpen, onOpenChange: controlledOnOpenChange }) {
	const [internalOpen, setInternalOpen] = (0, import_react.useState)(false);
	const open = controlledOpen ?? internalOpen;
	const setOpen = (next) => {
		setInternalOpen(next);
		controlledOnOpenChange?.(next);
	};
	const [values, setValues] = (0, import_react.useState)(() => toFormValues(record, defaultCategory));
	(0, import_react.useEffect)(() => {
		if (open) setValues(toFormValues(record, defaultCategory));
	}, [
		open,
		record,
		defaultCategory
	]);
	const set = (key, value) => setValues((prev) => ({
		...prev,
		[key]: value
	}));
	const handleSubmit = () => {
		onSubmit(values);
		setOpen(false);
	};
	const isEdit = mode === "edit";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: trigger ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), isEdit ? "Edit Expense" : "Add Expense"] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-[560px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isEdit ? `Edit ${record?.voucherNo ?? "Expense"}` : "Add New Expense" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Fill in the expense details below. Amounts are in Bangladeshi Taka (BDT)." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-category",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: values.category,
									onValueChange: (next) => set("category", next),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: "expense-category",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select category" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: EXPENSE_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: category,
										children: category
									}, category)) })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-amount",
									children: "Amount (BDT)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "expense-amount",
									type: "number",
									min: "0",
									placeholder: "e.g. 5000",
									value: values.amount,
									onChange: (event) => set("amount", event.target.value)
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "expense-description",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "expense-description",
								placeholder: "What was this expense for?",
								value: values.description,
								onChange: (event) => set("description", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-paid-to",
									children: "Paid To"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "expense-paid-to",
									placeholder: "Vendor or payee name",
									value: values.paidTo,
									onChange: (event) => set("paidTo", event.target.value)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-date",
									children: "Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "expense-date",
									type: "date",
									value: values.date,
									onChange: (event) => set("date", event.target.value)
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-method",
									children: "Payment Method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: values.method,
									onValueChange: (next) => set("method", next),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: "expense-method",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select method" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: EXPENSE_METHODS.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: method,
										children: method
									}, method)) })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "expense-status",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: values.status,
									onValueChange: (next) => set("status", next),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: "expense-status",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select status" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: EXPENSE_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: status,
										children: status
									}, status)) })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "expense-remarks",
								children: "Remarks"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "expense-remarks",
								placeholder: "Optional notes",
								value: values.remarks,
								onChange: (event) => set("remarks", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: "expense-recurring",
								checked: values.recurring,
								onCheckedChange: (checked) => set("recurring", checked === true)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "expense-recurring",
								className: "font-normal",
								children: "Recurring expense (e.g. monthly rent, salaries)"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setOpen(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleSubmit,
					children: isEdit ? "Save Changes" : "Add Expense"
				})] })
			]
		})]
	});
}
var toneClass = {
	warning: {
		icon: "bg-warning/15 text-warning",
		bar: "from-warning/70",
		button: "hover:border-warning/40"
	},
	danger: {
		icon: "bg-danger/12 text-danger",
		bar: "from-danger/70",
		button: "hover:border-danger/40"
	},
	info: {
		icon: "bg-info/12 text-info",
		bar: "from-info/70",
		button: "hover:border-info/40"
	},
	primary: {
		icon: "bg-primary/10 text-primary",
		bar: "from-primary/70",
		button: "hover:border-primary/40"
	}
};
function ExpenseTypeCardItem({ card, onAdd }) {
	const Icon = card.icon;
	const tone = toneClass[card.tone];
	const buttonLabel = `Add ${card.type}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("relative flex h-full flex-col overflow-hidden p-5", tone.button),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent", tone.bar),
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-lg", tone.icon),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-[15px] font-semibold tracking-tight text-foreground",
					children: card.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
					children: card.hint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseFormDialog, {
						mode: "create",
						defaultCategory: card.type,
						onSubmit: onAdd,
						trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}), buttonLabel]
						})
					})
				})
			]
		})]
	});
}
function ExpenseTypeCards({ onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Expense types",
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: EXPENSE_TYPE_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseTypeCardItem, {
			card,
			onAdd
		}, card.type))
	});
}
var EXPENSE_COLUMNS = [
	{
		key: "voucherNo",
		label: "Voucher No",
		hideable: false
	},
	{
		key: "category",
		label: "Category",
		hideable: false
	},
	{
		key: "description",
		label: "Description",
		hideable: true
	},
	{
		key: "amount",
		label: "Amount",
		hideable: true,
		align: "right"
	},
	{
		key: "method",
		label: "Payment Method",
		hideable: true
	},
	{
		key: "paidTo",
		label: "Paid To",
		hideable: true
	},
	{
		key: "date",
		label: "Date",
		hideable: true
	},
	{
		key: "recordedBy",
		label: "Recorded By",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_EXPENSE_COLUMNS = EXPENSE_COLUMNS.map((column) => column.key);
var DEFAULT_EXPENSE_FILTERS = {
	search: "",
	category: "all",
	status: "all",
	method: "all",
	range: "all"
};
function ExpenseFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn, searchPlaceholder = "Search voucher, description or payee…" }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[400px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: searchPlaceholder,
					"aria-label": "Search expenses",
					className: "h-9 bg-muted/40 pl-9 shadow-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Columns"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-56",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Visible columns" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							EXPENSE_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
								checked: visibleColumns.includes(column.key),
								onCheckedChange: () => onToggleColumn(column.key),
								onSelect: (event) => event.preventDefault(),
								children: column.label
							}, column.key))
						]
					})] }) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "category",
					placeholder: "Category",
					width: "w-[180px]",
					value: value.category,
					onChange: (next) => set({ category: next }),
					options: EXPENSE_CATEGORIES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "status",
					placeholder: "Status",
					width: "w-[150px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: EXPENSE_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "payment method",
					placeholder: "Method",
					width: "w-[180px]",
					value: value.method,
					onChange: (next) => set({ method: next }),
					options: EXPENSE_METHODS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						children: EXPENSE_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_EXPENSE_FILTERS),
					children: "Clear"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange: onChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				children: [
					"All ",
					label,
					"s"
				]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				children: option
			}, option))]
		})]
	});
}
function ExpenseTable({ records, visibleColumns, sort, onSort, selectedIds, onToggleRow, onToggleAll, onView, onEdit, onDelete }) {
	const allSelected = records.length > 0 && records.every((r) => selectedIds.includes(r.id));
	const someSelected = records.some((r) => selectedIds.includes(r.id));
	const sortIcon = (key) => {
		if (sort.key !== key) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, {
			className: "h-3.5 w-3.5 text-muted-foreground/50",
			"aria-hidden": "true"
		});
		return sort.direction === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		});
	};
	const columns = EXPENSE_COLUMNS.filter((c) => visibleColumns.includes(c.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-transparent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[44px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: allSelected || (someSelected ? "indeterminate" : false),
						onCheckedChange: onToggleAll,
						"aria-label": "Select all expenses"
					})
				}),
				columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: column.align === "right" ? "text-right" : void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex items-center gap-1.5 font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground",
						onClick: () => onSort(column.key),
						children: [column.label, sortIcon(column.key)]
					})
				}, column.key)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-[48px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Actions"
					})
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: records.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: columns.length + 2,
			className: "h-24 text-center text-muted-foreground",
			children: "No expenses found. Try adjusting your filters."
		}) }) : records.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: selectedIds.includes(record.id) ? "bg-muted/40" : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					checked: selectedIds.includes(record.id),
					onCheckedChange: () => onToggleRow(record.id),
					"aria-label": `Select ${record.voucherNo}`
				}) }),
				visibleColumns.includes("voucherNo") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: record.voucherNo
				}),
				visibleColumns.includes("category") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: EXPENSE_CATEGORY_TONE[record.category],
					label: record.category
				}) }),
				visibleColumns.includes("description") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "max-w-[260px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-medium text-foreground",
						children: record.description
					}), record.recurring ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Recurring"
					}) : null]
				}),
				visibleColumns.includes("amount") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right font-semibold tabular-nums",
					children: formatTaka(record.amount)
				}),
				visibleColumns.includes("method") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-muted-foreground",
					children: record.method
				}),
				visibleColumns.includes("paidTo") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-muted-foreground",
					children: record.paidTo
				}),
				visibleColumns.includes("date") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "whitespace-nowrap text-muted-foreground",
					children: new Date(record.date).toLocaleDateString("en-GB", {
						day: "2-digit",
						month: "short",
						year: "numeric"
					})
				}),
				visibleColumns.includes("recordedBy") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-muted-foreground",
					children: record.recordedBy
				}),
				visibleColumns.includes("status") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: EXPENSE_STATUS_TONE[record.status],
					label: record.status
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-8 w-8",
						"aria-label": `Actions for ${record.voucherNo}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					className: "w-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: record.voucherNo }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onSelect: () => onView(record),
							children: "View details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onSelect: () => onEdit(record),
							children: "Edit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: "text-destructive focus:text-destructive",
							onSelect: () => onDelete(record),
							children: "Delete"
						})
					]
				})] }) })
			]
		}, record.id)) })] })
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(EXPENSES_TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function ExpensePage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_EXPENSE_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_EXPENSE_COLUMNS);
	const [sort, setSort] = (0, import_react.useState)({
		key: "date",
		direction: "desc"
	});
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [records, setRecords] = (0, import_react.useState)(EXPENSE_RECORDS);
	const [editingRecord, setEditingRecord] = (0, import_react.useState)();
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return records.filter((record) => {
			return (!query || [
				record.voucherNo,
				record.description,
				record.paidTo,
				record.category
			].join(" ").toLowerCase().includes(query)) && (filters.category === "all" || record.category === filters.category) && (filters.status === "all" || record.status === filters.status) && (filters.method === "all" || record.method === filters.method) && withinRange(record.date, filters.range);
		}).sort((a, b) => {
			const direction = sort.direction === "asc" ? 1 : -1;
			const aValue = a[sort.key];
			const bValue = b[sort.key];
			if (typeof aValue === "number" && typeof bValue === "number") return (aValue - bValue) * direction;
			return String(aValue).localeCompare(String(bValue)) * direction;
		});
	}, [
		filters,
		sort,
		records
	]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	const toggleColumn = (key) => setVisibleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const handleSort = (key) => setSort((current) => current.key === key ? {
		key,
		direction: current.direction === "asc" ? "desc" : "asc"
	} : {
		key,
		direction: "asc"
	});
	const toggleRow = (id) => setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	const toggleAll = () => {
		if (selectedIds.length === rows.length) setSelectedIds([]);
		else setSelectedIds(rows.map((row) => row.id));
	};
	const handleCreate = (values) => {
		const nextNumber = records.length + 1;
		const newRecord = {
			id: `exp-${String(nextNumber).padStart(3, "0")}`,
			voucherNo: `EXP-2026-${String(nextNumber).padStart(4, "0")}`,
			category: values.category,
			description: values.description,
			amount: Number(values.amount),
			method: values.method,
			paidTo: values.paidTo,
			date: values.date,
			recordedBy: "Nusrat Jahan (Manager)",
			status: values.status,
			remarks: values.remarks,
			recurring: values.recurring
		};
		setRecords((current) => [newRecord, ...current]);
		setPage(1);
	};
	const handleEditSave = (values) => {
		if (!editingRecord) return;
		setRecords((current) => current.map((item) => item.id === editingRecord.id ? {
			...item,
			category: values.category,
			description: values.description,
			amount: Number(values.amount),
			method: values.method,
			paidTo: values.paidTo,
			date: values.date,
			status: values.status,
			remarks: values.remarks,
			recurring: values.recurring
		} : item));
		setEditingRecord(void 0);
	};
	const handleDelete = (record) => {
		setRecords((current) => current.filter((item) => item.id !== record.id));
		setSelectedIds((current) => current.filter((id) => id !== record.id));
	};
	const resetFiltersButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		onClick: () => setFilters(DEFAULT_EXPENSE_FILTERS),
		children: "Reset filters"
	});
	const addExpenseButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseFormDialog, {
		mode: "create",
		onSubmit: handleCreate,
		trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Add Expense"] })
	});
	const editDialog = editingRecord !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseFormDialog, {
		mode: "edit",
		record: editingRecord,
		onSubmit: handleEditSave,
		trigger: null,
		open: editingRecord !== void 0,
		onOpenChange: (next) => {
			if (!next) setEditingRecord(void 0);
		}
	}, editingRecord.id) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Expense",
				description: "Track branch expenses, manage approvals and monitor spending.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Expense" }],
				actions: addExpenseButton
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseTypeCards, { onAdd: handleCreate }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Expense list",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					visibleColumns,
					onToggleColumn: toggleColumn
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: ReceiptText,
					title: "No Expenses Yet",
					description: "Record your first expense to start tracking branch spending.",
					action: addExpenseButton,
					secondaryAction: resetFiltersButton,
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpenseTable, {
					records: rows,
					visibleColumns,
					sort,
					onSort: handleSort,
					selectedIds,
					onToggleRow: toggleRow,
					onToggleAll: toggleAll,
					onView: (record) => console.info("View expense", record.voucherNo),
					onEdit: setEditingRecord,
					onDelete: handleDelete
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage
					})
				})] })]
			}),
			editDialog
		]
	});
}
//#endregion
export { ExpensePage as component };
