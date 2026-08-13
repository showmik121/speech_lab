import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { K as Plus, P as Search, dt as LoaderCircle, ht as Layers } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { a as PACKAGE_STATUSES, f as PAYMENT_PACKAGES, s as PACKAGE_TYPES } from "./payment-data-BZ055nra.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as EmptyState } from "./empty-state-PYUplmc1.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as PackageCard, t as CreatePackageDialog } from "./create-package-dialog-CNNzBl43.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.packages.index-DMG-Y5Ai.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Edit Package Dialog — pre-fills all fields from the selected package.
* Nothing is persisted — the Django REST API will own this later.
*/
function EditPackageDialog({ open, onOpenChange, item }) {
	const [name, setName] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [registrationFee, setRegistrationFee] = (0, import_react.useState)("");
	const [discount, setDiscount] = (0, import_react.useState)("");
	const [duration, setDuration] = (0, import_react.useState)("");
	const [sessions, setSessions] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (item) {
			setName(item.name);
			setType(item.type);
			setStatus(item.status);
			setDescription(item.description);
			setPrice(String(item.price));
			setRegistrationFee(String(item.registrationFee));
			setDiscount(String(item.discount));
			setDuration(item.durationLabel);
			setSessions(String(item.sessions));
			setExpiry(item.expiry);
		}
	}, [item]);
	const close = () => onOpenChange(false);
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:77:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:78:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:79:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:80:11",
						children: "Edit Package"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:81:11",
						children: [
							"Update the details for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:82:36",
								children: item.name
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:86:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-name",
							label: "Package name",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:88:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "e.g. Monthly 1:1 Individual Plan",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:89:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-type",
							label: "Package type",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:97:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: type,
								onValueChange: setType,
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:98:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "edit-package-type",
									"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:99:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select type",
										"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:100:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:102:15",
									children: PACKAGE_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: t,
										"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:104:19",
										children: t
									}, t))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-description",
							label: "Description",
							hint: "Shown to guardians on the invoice",
							className: "sm:col-span-2",
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:110:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "edit-package-description",
								rows: 3,
								value: description,
								onChange: (e) => setDescription(e.target.value),
								placeholder: "What is included in this package…",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:116:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-status",
							label: "Status",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:125:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: setStatus,
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:126:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "edit-package-status",
									"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:127:15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select status",
										"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:128:17"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:130:15",
									children: PACKAGE_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: s,
										"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:132:19",
										children: s
									}, s))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-price",
							label: "Price (৳)",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:139:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-price",
								type: "number",
								min: 0,
								value: price,
								onChange: (e) => setPrice(e.target.value),
								placeholder: "14000",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:140:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-registration",
							label: "Registration fee (৳)",
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:150:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-registration",
								type: "number",
								min: 0,
								value: registrationFee,
								onChange: (e) => setRegistrationFee(e.target.value),
								placeholder: "1000",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:151:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-discount",
							label: "Discount (%)",
							hint: "Applied on the package price",
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:161:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-discount",
								type: "number",
								min: 0,
								max: 100,
								value: discount,
								onChange: (e) => setDiscount(e.target.value),
								placeholder: "10",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:162:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-duration",
							label: "Package duration",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:174:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-duration",
								value: duration,
								onChange: (e) => setDuration(e.target.value),
								placeholder: "e.g. 1 month",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:175:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-sessions",
							label: "Number of sessions",
							required: true,
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:183:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-sessions",
								type: "number",
								min: 1,
								value: sessions,
								onChange: (e) => setSessions(e.target.value),
								placeholder: "12",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:184:13"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "edit-package-expiry",
							label: "Expiry",
							hint: "When unused sessions lapse",
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:194:11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "edit-package-expiry",
								value: expiry,
								onChange: (e) => setExpiry(e.target.value),
								placeholder: "Last day of the billing month",
								"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:195:13"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:204:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:205:11",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting,
						"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:208:11",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true",
							"data-tsd-source": "/src/components/payments/edit-package-dialog.tsx:210:15"
						}) : null, "Save changes"]
					})]
				})
			]
		})
	});
}
function PackagesPage() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [editItem, setEditItem] = (0, import_react.useState)(null);
	const packages = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return PAYMENT_PACKAGES.filter((item) => (!query || [
			item.name,
			item.code,
			item.description
		].join(" ").toLowerCase().includes(query)) && (type === "all" || item.type === type) && (status === "all" || item.status === status));
	}, [
		search,
		type,
		status
	]);
	const activeRevenue = packages.reduce((total, item) => total + item.monthlyRevenue, 0);
	const openEdit = (pkg) => {
		setEditItem(pkg);
		setEditOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		"data-tsd-source": "/src/routes/manager.packages.index.tsx:71:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Packages",
				description: "Manage packages, pricing, session rules and collect payments.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Packages" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Package"]
				}),
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:72:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:87:7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-b border-border px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between",
					"data-tsd-source": "/src/routes/manager.packages.index.tsx:88:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full lg:max-w-[360px]",
						"data-tsd-source": "/src/routes/manager.packages.index.tsx:89:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
							"aria-hidden": "true",
							"data-tsd-source": "/src/routes/manager.packages.index.tsx:90:13"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "search",
							value: search,
							onChange: (event) => setSearch(event.target.value),
							placeholder: "Search package name or code…",
							"aria-label": "Search packages",
							className: "h-9 bg-muted/40 pl-9 shadow-none",
							"data-tsd-source": "/src/routes/manager.packages.index.tsx:94:13"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						"data-tsd-source": "/src/routes/manager.packages.index.tsx:103:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: type,
							onValueChange: setType,
							"data-tsd-source": "/src/routes/manager.packages.index.tsx:104:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-9 w-[180px]",
								"aria-label": "Filter by package type",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:105:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Package type",
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:106:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								align: "start",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:108:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:109:17",
									children: "All package types"
								}), PACKAGE_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:111:19",
									children: item
								}, item))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: status,
							onValueChange: setStatus,
							"data-tsd-source": "/src/routes/manager.packages.index.tsx:117:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-9 w-[150px]",
								"aria-label": "Filter by status",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:118:15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Status",
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:119:17"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								align: "start",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:121:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:122:17",
									children: "All statuses"
								}), PACKAGE_STATUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									"data-tsd-source": "/src/routes/manager.packages.index.tsx:124:19",
									children: item
								}, item))]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 text-[12.5px] text-muted-foreground sm:px-5",
					"data-tsd-source": "/src/routes/manager.packages.index.tsx:133:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"data-tsd-source": "/src/routes/manager.packages.index.tsx:134:11",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:135:21",
								children: packages.length
							}),
							" of",
							" ",
							PAYMENT_PACKAGES.length,
							" packages"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"data-tsd-source": "/src/routes/manager.packages.index.tsx:138:11",
						children: [
							"Monthly revenue from selection:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium tabular-nums text-foreground",
								"data-tsd-source": "/src/routes/manager.packages.index.tsx:140:13",
								children: formatTaka(activeRevenue)
							})
						]
					})]
				})]
			}),
			packages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Layers,
				title: "No Packages Found",
				description: "Create your first package to get started.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Package"]
				}),
				secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => {
						setSearch("");
						setType("all");
						setStatus("all");
					},
					children: "Reset filters"
				}),
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:148:9"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:172:9",
				children: packages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
					item,
					onEdit: openEdit,
					"data-tsd-source": "/src/routes/manager.packages.index.tsx:174:13"
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePackageDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen,
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:183:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditPackageDialog, {
				open: editOpen,
				onOpenChange: setEditOpen,
				item: editItem,
				"data-tsd-source": "/src/routes/manager.packages.index.tsx:184:7"
			})
		]
	});
}
//#endregion
export { PackagesPage as component };
