import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { C as SquarePen, Et as Funnel, N as Search, Rt as Clock, S as Stethoscope, Wt as CircleCheck, at as MapPin } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-DQdvbG7c.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as StatusBadge } from "./status-badge-Dga_qCN3.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { n as useDailySessionStore } from "./daily-session-store-DUqwsGlm.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.daily-session.index-ubN2q7F4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DailySessionPage() {
	const { sessions, updateSession } = useDailySessionStore();
	const [search, setSearch] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("All");
	const [editItem, setEditItem] = (0, import_react.useState)(null);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [editPrice, setEditPrice] = (0, import_react.useState)("");
	const [editDesc, setEditDesc] = (0, import_react.useState)("");
	const [editDuration, setEditDuration] = (0, import_react.useState)("");
	const filteredSessions = (0, import_react.useMemo)(() => {
		return sessions.filter((item) => {
			const matchesSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
			const matchesCat = categoryFilter === "All" || item.category === categoryFilter;
			return matchesSearch && matchesCat;
		});
	}, [
		sessions,
		search,
		categoryFilter
	]);
	const openEdit = (item) => {
		setEditItem(item);
		setEditPrice(String(item.price));
		setEditDesc(item.description);
		setEditDuration(item.durationLabel);
		setEditOpen(true);
	};
	const handleSaveEdit = () => {
		if (!editItem) return;
		updateSession({
			...editItem,
			price: Number(editPrice) || editItem.price,
			description: editDesc || editItem.description,
			durationLabel: editDuration || editItem.durationLabel
		});
		setEditOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Daily Session",
				description: "Configure outdoor home visit therapy sessions and specialist clinical consultation fees.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Daily Session" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search daily sessions by name or code...",
						className: "h-10 bg-background/80 pl-9 pr-4 text-sm"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-muted-foreground flex items-center gap-1 mr-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), " Filter:"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategoryFilter("All"),
							className: `rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${categoryFilter === "All" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: "All Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategoryFilter("Outdoor Session"),
							className: `rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${categoryFilter === "Outdoor Session" ? "bg-emerald-600 text-white shadow-xs" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: "Outdoor Visits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategoryFilter("Consultation Fee"),
							className: `rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${categoryFilter === "Consultation Fee" ? "bg-blue-600 text-white shadow-xs" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`,
							children: "Consultations"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Daily session service catalog",
				className: "space-y-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: filteredSessions.map((item) => {
						const isOutdoor = item.id === "ds-outdoor";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: `relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 transition-all duration-200 p-6 shadow-md hover:shadow-xl ${isOutdoor ? "border-emerald-500/35 bg-gradient-to-br from-card via-card to-emerald-500/5 hover:border-emerald-500/60" : "border-blue-500/35 bg-gradient-to-br from-card via-card to-blue-500/5 hover:border-blue-500/60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md ${isOutdoor ? "bg-gradient-to-tr from-emerald-600 to-teal-500" : "bg-gradient-to-tr from-blue-600 to-indigo-500"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(isOutdoor ? MapPin : Stethoscope, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
												children: item.code
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${isOutdoor ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-blue-500/15 text-blue-600 dark:text-blue-400"}`,
												children: item.category
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold tracking-tight text-foreground mt-0.5",
											children: item.name
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "success",
										label: item.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between rounded-xl border border-border/80 bg-muted/30 px-4 py-3.5 backdrop-blur-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Standard Service Fee"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-extrabold tracking-tight tabular-nums text-foreground mt-0.5",
										children: formatTaka(item.price)
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-lg bg-background border border-border px-3 py-1.5 text-xs font-semibold text-foreground shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }), item.durationLabel]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "1 Session / Booking"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-foreground/90 font-medium",
										children: item.description
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border/60 bg-card/80 p-3.5 text-xs space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-muted-foreground uppercase text-[10.5px] tracking-wider",
												children: "Included Features & Protocol"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2 text-foreground/90",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `h-4 w-4 shrink-0 mt-0.5 ${isOutdoor ? "text-emerald-500" : "text-blue-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.hint })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2 text-foreground/90",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `h-4 w-4 shrink-0 mt-0.5 ${isOutdoor ? "text-emerald-500" : "text-blue-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOutdoor ? "Customized home-based speech intervention & caregiver guidance." : "Detailed assessment report & personalized therapy roadmap." })]
											})
										]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center justify-end border-t border-border/80 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => openEdit(item),
									className: "h-9 text-xs font-semibold gap-1.5 border-primary/30 text-primary hover:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3.5 w-3.5" }), "Edit Details & Fee"]
								})
							})]
						}, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: editOpen,
				onOpenChange: setEditOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Edit ", editItem?.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Update service description, duration, or session fee in BDT." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									id: "edit-price",
									label: "Session Fee (৳)",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "edit-price",
										type: "number",
										value: editPrice,
										onChange: (e) => setEditPrice(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									id: "edit-duration",
									label: "Duration Label",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "edit-duration",
										value: editDuration,
										onChange: (e) => setEditDuration(e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									id: "edit-desc",
									label: "Description",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "edit-desc",
										rows: 3,
										value: editDesc,
										onChange: (e) => setEditDesc(e.target.value)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2.5 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: () => setEditOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSaveEdit,
								children: "Save Changes"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { DailySessionPage as component };
