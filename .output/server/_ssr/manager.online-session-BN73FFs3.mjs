import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { K as Plus, L as RotateCcw, Lt as Clock, Y as Pencil, a as Wallet, o as Video, ut as Lock } from "../_libs/lucide-react.mjs";
import { p as formatTaka } from "./dashboard-data-C7eijLwG.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BeY7P7-y.mjs";
import { t as Input } from "./input-BI0DiUgw.mjs";
import { t as FormField } from "./form-field-v40W9a5m.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-0Usd3J6t.mjs";
import { t as Badge } from "./badge-C3xjBsL2.mjs";
import { t as Card } from "./card-e-zh1EWu.mjs";
import { t as PageHeader } from "./page-header-FOgtVZ1Y.mjs";
import { t as StatusBadge } from "./status-badge-DNJfhUof.mjs";
import { t as Textarea } from "./textarea-CzvKo22m.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.online-session-BN73FFs3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ONLINE_SERVICE_STATUS_TONE = {
	Active: "success",
	Inactive: "neutral"
};
var ONLINE_CATEGORY_TONE = {
	"Online Session": "info",
	Screening: "success",
	Assessment: "warning",
	Training: "info",
	Consultation: "success",
	"Senior Consultant Consultation": "success",
	Conference: "neutral",
	Other: "neutral"
};
var SERVICE_CATEGORIES = [
	"Online Session",
	"Screening",
	"Assessment",
	"Training",
	"Senior Consultant Consultation",
	"Conference",
	"Other"
];
var AVAILABLE_PLATFORMS = [
	"Google Meet",
	"Zoom",
	"Microsoft Teams",
	"Other"
];
var AVAILABLE_DURATIONS = [
	"30 Minutes",
	"45 Minutes",
	"60 Minutes",
	"90 Minutes",
	"120 Minutes",
	"Custom"
];
var AVAILABLE_STATUSES = ["Active", "Inactive"];
var FIXED_ONLINE_SERVICES = [
	{
		id: "ONLINE_SESSION",
		name: "Online Session",
		category: "Online Session",
		description: "Online speech therapy sessions conducted remotely through an online meeting platform.",
		fee: 1500,
		duration: "60 Minutes",
		platform: "Google Meet",
		bookingType: "Advance / Booking",
		status: "Active"
	},
	{
		id: "ONLINE_SCREENING",
		name: "Online Screening",
		category: "Screening",
		description: "Online screening service for initial evaluation and identification of communication/speech-related needs.",
		fee: 1e3,
		duration: "30 Minutes",
		platform: "Google Meet",
		bookingType: "Advance / Booking",
		status: "Active"
	},
	{
		id: "ONLINE_ASSESSMENT",
		name: "Online Assessment",
		category: "Assessment",
		description: "Professional assessment conducted online to evaluate the patient's communication, speech, language or related needs.",
		fee: 2e3,
		duration: "60 Minutes",
		platform: "Google Meet",
		bookingType: "Advance / Booking",
		status: "Active"
	},
	{
		id: "ONLINE_TRAINING",
		name: "Online Training",
		category: "Training",
		description: "Online training programs, courses and skill-development sessions conducted through an online platform.",
		fee: 3e3,
		duration: "90 Minutes",
		platform: "Zoom",
		bookingType: "Advance / Booking",
		status: "Active"
	},
	{
		id: "SENIOR_CONSULTANT",
		name: "Senior Consultant Consultation",
		category: "Senior Consultant Consultation",
		description: "Online consultation with the Senior Consultant for professional advice and guidance.",
		fee: 2500,
		duration: "30 Minutes",
		platform: "Google Meet",
		bookingType: "Advance / Booking",
		status: "Active"
	},
	{
		id: "CONFERENCE",
		name: "Conference",
		category: "Conference",
		description: "Online or offline conference registration and participation service.",
		fee: 1e3,
		duration: "Custom",
		platform: "Zoom",
		bookingType: "Advance / Booking",
		status: "Active"
	}
];
function FixedOnlineServiceCard({ service, onEdit }) {
	const isActive = service.status === "Active";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("group flex h-full flex-col justify-between overflow-hidden border border-border bg-card p-5 transition-enterprise hover:border-primary/40 hover:shadow-card-hover", !isActive && "opacity-80 bg-muted/20"),
		"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:26:5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:34:7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:36:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: ONLINE_CATEGORY_TONE[service.category] || "info",
						label: service.category,
						dot: false,
						className: "text-[11px] font-medium",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:37:11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: ONLINE_SERVICE_STATUS_TONE[service.status],
						label: service.status,
						className: "text-[11px]",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:43:11"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:51:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:52:11",
						children: service.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground line-clamp-3 min-h-[48px]",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:55:11",
						children: service.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-lg bg-muted/40 px-3.5 py-2.5",
					"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:61:9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted-foreground",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:62:11",
						children: "Service Fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-right",
						"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:63:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-bold tabular-nums text-primary",
							"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:64:13",
							children: formatTaka(service.fee)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-lg border border-border/70 bg-background/50 p-3 text-xs",
					"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:71:9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:73:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:74:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "h-3.5 w-3.5 text-primary/70",
									"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:75:15"
								}), "Duration"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:78:13",
								children: service.duration
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:82:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:83:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
									className: "h-3.5 w-3.5 text-primary/70",
									"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:84:15"
								}), "Online Platform"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:87:13",
								children: service.platform
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:91:11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:92:13",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
									className: "h-3.5 w-3.5 text-primary/70",
									"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:93:15"
								}), "Payment Type"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] py-0 px-1.5 font-medium border-primary/25 text-primary bg-primary/5",
								"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:96:13",
								children: service.bookingType
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 border-t border-border pt-3.5",
			"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:107:7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => onEdit(service),
				className: "w-full gap-2 text-xs h-9 font-medium shadow-2xs hover:bg-primary/5 hover:text-primary hover:border-primary/40",
				"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:108:9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
					className: "h-3.5 w-3.5",
					"aria-hidden": "true",
					"data-tsd-source": "/src/components/online-session/fixed-online-service-card.tsx:114:11"
				}), "Edit"]
			})
		})]
	});
}
function CreateOnlineServiceDialog({ open, onOpenChange, onCreate }) {
	const [name, setName] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Online Session");
	const [description, setDescription] = (0, import_react.useState)("");
	const [fee, setFee] = (0, import_react.useState)("1500");
	const [duration, setDuration] = (0, import_react.useState)("60 Minutes");
	const [customDuration, setCustomDuration] = (0, import_react.useState)("");
	const [platform, setPlatform] = (0, import_react.useState)("Google Meet");
	const [status, setStatus] = (0, import_react.useState)("Active");
	const [errors, setErrors] = (0, import_react.useState)({});
	const validate = () => {
		const errs = {};
		if (!name.trim()) errs.name = "Service Name is required.";
		if (!category.trim()) errs.category = "Service Category is required.";
		if (!description.trim()) errs.description = "Description is required.";
		const feeNum = Number(fee);
		if (!fee || isNaN(feeNum) || feeNum <= 0) errs.fee = "Service Fee must be a valid number greater than 0.";
		if (!duration) errs.duration = "Duration is required.";
		if (duration === "Custom" && !customDuration.trim()) errs.customDuration = "Please specify the custom duration.";
		if (!platform) errs.platform = "Online Platform is required.";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleClose = () => {
		onOpenChange(false);
		setTimeout(() => {
			setName("");
			setCategory("Online Session");
			setDescription("");
			setFee("1500");
			setDuration("60 Minutes");
			setCustomDuration("");
			setPlatform("Google Meet");
			setStatus("Active");
			setErrors({});
		}, 200);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		const finalDuration = duration === "Custom" ? customDuration.trim() : duration;
		onCreate({
			name: name.trim(),
			category: category.trim(),
			description: description.trim(),
			fee: Math.max(Number(fee) || 0, 0),
			duration: finalDuration,
			platform,
			status
		});
		handleClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:114:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-[580px]",
			"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:115:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:116:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:117:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary",
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:118:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:119:15"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:121:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-semibold",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:122:15",
							children: "Create Online Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-xs",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:125:15",
							children: "Add a new online service for advance/booking payment."
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 pt-2",
				"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:132:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Service Name",
						required: true,
						error: errors.name,
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:134:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (e) => {
								setName(e.target.value);
								if (errors.name) setErrors((prev) => ({
									...prev,
									name: ""
								}));
							},
							placeholder: "e.g. Online Speech Therapy Session",
							className: "h-9",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:139:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3.5 sm:grid-cols-2",
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:151:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Service Category",
							required: true,
							error: errors.category,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:152:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: category,
								onValueChange: (val) => {
									setCategory(val);
									if (errors.category) setErrors((prev) => ({
										...prev,
										category: ""
									}));
								},
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:157:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:164:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select category",
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:165:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:167:17",
									children: SERVICE_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: cat,
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:169:21",
										children: cat
									}, cat))
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Service Fee (BDT ৳)",
							required: true,
							error: errors.fee,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:177:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "1",
								step: "50",
								value: fee,
								onChange: (e) => {
									setFee(e.target.value);
									if (errors.fee) setErrors((prev) => ({
										...prev,
										fee: ""
									}));
								},
								placeholder: "1500",
								className: "h-9 font-semibold",
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:182:15"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Description",
						required: true,
						error: errors.description,
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:198:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							value: description,
							onChange: (e) => {
								setDescription(e.target.value);
							},
							placeholder: "Online speech therapy session conducted remotely through an online meeting platform.",
							className: "resize-none text-xs",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:203:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3.5 sm:grid-cols-2",
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:215:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Duration",
							required: true,
							error: errors.duration,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:216:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: duration,
								onValueChange: (val) => {
									setDuration(val);
									if (errors.duration) setErrors((prev) => ({
										...prev,
										duration: ""
									}));
								},
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:221:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:228:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select duration",
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:229:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:231:17",
									children: AVAILABLE_DURATIONS.map((dur) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: dur,
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:233:21",
										children: dur
									}, dur))
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Online Platform",
							required: true,
							error: errors.platform,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:241:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: platform,
								onValueChange: (val) => {
									setPlatform(val);
									if (errors.platform) setErrors((prev) => ({
										...prev,
										platform: ""
									}));
								},
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:246:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:253:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select platform",
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:254:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:256:17",
									children: AVAILABLE_PLATFORMS.map((plat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: plat,
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:258:21",
										children: plat
									}, plat))
								})]
							})
						})]
					}),
					duration === "Custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Custom Duration",
						required: true,
						error: errors.customDuration,
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:269:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: customDuration,
							onChange: (e) => {
								setCustomDuration(e.target.value);
								if (errors.customDuration) setErrors((prev) => ({
									...prev,
									customDuration: ""
								}));
							},
							placeholder: "e.g. 75 Minutes or 2 Hours",
							className: "h-9",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:274:15"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3.5 sm:grid-cols-2",
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:287:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Payment Type",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:288:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-9 items-center justify-between rounded-md border border-border bg-muted/50 px-3 text-xs text-muted-foreground",
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:289:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:290:17",
									children: "Advance / Booking"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
									className: "h-3.5 w-3.5 text-muted-foreground",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:291:17"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							required: true,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:295:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: (val) => setStatus(val),
								"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:296:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:300:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select status",
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:301:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:303:17",
									children: AVAILABLE_STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: st,
										"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:305:21",
										children: st
									}, st))
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 sm:gap-0 pt-3",
						"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:314:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: handleClose,
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:315:13",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							"data-tsd-source": "/src/components/online-session/create-online-service-dialog.tsx:322:13",
							children: "Create Service"
						})]
					})
				]
			})]
		})
	});
}
function EditOnlineServiceDialog({ open, onOpenChange, service, onSave }) {
	const [name, setName] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [fee, setFee] = (0, import_react.useState)("1500");
	const [duration, setDuration] = (0, import_react.useState)("60 Minutes");
	const [platform, setPlatform] = (0, import_react.useState)("Google Meet");
	const [status, setStatus] = (0, import_react.useState)("Active");
	(0, import_react.useEffect)(() => {
		if (service) {
			setName(service.name);
			setDescription(service.description);
			setFee(service.fee.toString());
			setDuration(service.duration);
			setPlatform(service.platform);
			setStatus(service.status);
		}
	}, [service, open]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!service || !name.trim()) return;
		const updatedData = {
			name: name.trim(),
			description: description.trim(),
			fee: Math.max(Number(fee) || 0, 0),
			duration,
			platform,
			status
		};
		onSave(service.id, updatedData);
		onOpenChange(false);
	};
	if (!service) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:86:5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-[560px]",
			"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:87:7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:88:9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:89:11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary",
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:90:13",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
							className: "h-4 w-4",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:91:15"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:93:13",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-semibold",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:94:15",
							children: ["Edit ", service.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-xs",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:97:15",
							children: "Update service pricing, duration, online meeting platform, and status."
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 pt-2",
				"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:104:9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Service Display Name",
						required: true,
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:106:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "e.g. Online Speech Therapy Session",
							className: "h-9",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:107:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Service Description",
						required: true,
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:117:11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							required: true,
							value: description,
							onChange: (e) => setDescription(e.target.value),
							placeholder: "Detailed description of what the patient will receive during this tele-session",
							className: "resize-none text-xs",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:118:13"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3.5 sm:grid-cols-2",
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:129:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Service Fee (BDT ৳)",
							required: true,
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:130:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "0",
								step: "50",
								required: true,
								value: fee,
								onChange: (e) => setFee(e.target.value),
								placeholder: "1500",
								className: "h-9 font-semibold",
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:131:15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Duration",
							required: true,
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:143:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: duration,
								onValueChange: (val) => setDuration(val),
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:144:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:148:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select duration",
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:149:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:151:17",
									children: AVAILABLE_DURATIONS.map((dur) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: dur,
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:153:21",
										children: dur
									}, dur))
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3.5 sm:grid-cols-2",
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:163:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Online Platform",
							required: true,
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:164:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: platform,
								onValueChange: (val) => setPlatform(val),
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:165:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:169:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select platform",
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:170:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:172:17",
									children: AVAILABLE_PLATFORMS.map((plat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: plat,
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:174:21",
										children: plat
									}, plat))
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Service Status",
							required: true,
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:182:13",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: status,
								onValueChange: (val) => setStatus(val),
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:183:15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9",
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:187:17",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
										placeholder: "Select status",
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:188:19"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:190:17",
									children: AVAILABLE_STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: st,
										"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:192:21",
										children: st
									}, st))
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/40 p-3 text-xs space-y-1",
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:202:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-medium text-foreground",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:203:13",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "h-3.5 w-3.5 text-muted-foreground",
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:204:15"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:205:15",
								children: "Payment Type: Advance / Booking"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground leading-relaxed",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:207:13",
							children: "Online session services are locked to Advance / Booking payment workflow. Fees are collected in advance prior to session commencement."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 sm:gap-0 pt-2",
						"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:212:11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:213:13",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							"data-tsd-source": "/src/components/online-session/edit-online-service-dialog.tsx:220:13",
							children: "Save Changes"
						})]
					})
				]
			})]
		})
	});
}
var STORAGE_KEY_SERVICES = "speech_lab_fixed_online_services";
var EVENT_NAME = "speech_lab_fixed_services_updated";
function notifyChange() {
	if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT_NAME));
}
function getStoredFixedServices() {
	if (typeof window === "undefined") return FIXED_ONLINE_SERVICES;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_SERVICES);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(FIXED_ONLINE_SERVICES));
			return FIXED_ONLINE_SERVICES;
		}
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed) || parsed.length === 0) {
			localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(FIXED_ONLINE_SERVICES));
			return FIXED_ONLINE_SERVICES;
		}
		return parsed;
	} catch {
		return FIXED_ONLINE_SERVICES;
	}
}
function setStoredFixedServices(services) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
	notifyChange();
}
/**
* Generate a clean stable ID for new online services
*/
function generateServiceId(name) {
	const cleanSlug = name.trim().toUpperCase().replace(/[^A-Z0-9]/g, "_").replace(/_+/g, "_").slice(0, 20);
	const suffix = Date.now().toString().slice(-4);
	return cleanSlug ? `SRV_${cleanSlug}_${suffix}` : `SRV_ONLINE_${suffix}`;
}
/**
* Hook for managing, creating and editing Online Services
*/
function useFixedOnlineServices() {
	const [services, setServices] = (0, import_react.useState)([]);
	const loadData = () => {
		setServices(getStoredFixedServices());
	};
	(0, import_react.useEffect)(() => {
		loadData();
		const handler = () => {
			loadData();
		};
		window.addEventListener(EVENT_NAME, handler);
		window.addEventListener("storage", handler);
		return () => {
			window.removeEventListener(EVENT_NAME, handler);
			window.removeEventListener("storage", handler);
		};
	}, []);
	const createService = (newServiceData) => {
		const all = getStoredFixedServices();
		const id = generateServiceId(newServiceData.name);
		const created = {
			...newServiceData,
			id,
			bookingType: "Advance / Booking"
		};
		setStoredFixedServices([...all, created]);
		toast.success("Online service created successfully.");
		return created;
	};
	const updateService = (id, patch) => {
		const updated = getStoredFixedServices().map((item) => item.id === id ? {
			...item,
			...patch
		} : item);
		setStoredFixedServices(updated);
		const target = updated.find((item) => item.id === id);
		toast.success(`${target?.name || "Service"} updated successfully.`);
	};
	const resetToDefaults = () => {
		setStoredFixedServices(FIXED_ONLINE_SERVICES);
		toast.info("Reset online services to default configurations.");
	};
	return {
		services,
		createService,
		updateService,
		resetToDefaults
	};
}
function OnlineSessionPage() {
	const { services, createService, updateService, resetToDefaults } = useFixedOnlineServices();
	const [createDialogOpen, setCreateDialogOpen] = (0, import_react.useState)(false);
	const [editingService, setEditingService] = (0, import_react.useState)(null);
	const [editDialogOpen, setEditDialogOpen] = (0, import_react.useState)(false);
	const handleOpenEdit = (service) => {
		setEditingService(service);
		setEditDialogOpen(true);
	};
	const handleSaveService = (id, data) => {
		updateService(id, data);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-12",
		"data-tsd-source": "/src/routes/manager.online-session.tsx:52:5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Online Session",
				description: "Manage online services",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Packages",
						to: "/manager/packages"
					},
					{ label: "Online Session" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: resetToDefaults,
						className: "h-9 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
						title: "Reset to default service configurations",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), "Reset Defaults"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateDialogOpen(true),
						className: "h-9 gap-1.5 text-xs shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "+ Create Online Service"]
					})]
				}),
				"data-tsd-source": "/src/routes/manager.online-session.tsx:54:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Online Services",
				"data-tsd-source": "/src/routes/manager.online-session.tsx:87:7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					"data-tsd-source": "/src/routes/manager.online-session.tsx:88:9",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FixedOnlineServiceCard, {
						service,
						onEdit: handleOpenEdit,
						"data-tsd-source": "/src/routes/manager.online-session.tsx:90:13"
					}, service.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateOnlineServiceDialog, {
				open: createDialogOpen,
				onOpenChange: setCreateDialogOpen,
				onCreate: createService,
				"data-tsd-source": "/src/routes/manager.online-session.tsx:100:7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditOnlineServiceDialog, {
				open: editDialogOpen,
				onOpenChange: setEditDialogOpen,
				service: editingService,
				onSave: handleSaveService,
				"data-tsd-source": "/src/routes/manager.online-session.tsx:107:7"
			})
		]
	});
}
//#endregion
export { OnlineSessionPage as component };
