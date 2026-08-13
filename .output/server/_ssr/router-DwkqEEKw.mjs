import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as findAssessment } from "./assessment-data-VYEbB3BS.mjs";
import { h as getFollowUp } from "./follow-up-data-ocWJfEAb.mjs";
import { C as movementsForMaterial, S as getMaterial, T as salesForMaterial, w as purchasesForMaterial } from "./material-data-BTa-_ze7.mjs";
import { d as OUTDOOR_VISITS } from "./outdoor-data-ClUJqde_.mjs";
import { p as findPatient } from "./patient-data-BLExFXXL.mjs";
import { y as findPaymentProfile } from "./payment-data-Dlqsfv3o.mjs";
import { d as findTherapySession } from "./therapy-data--L5tymgW.mjs";
import { u as findBranch } from "./branch-data-DT5AkdAt.mjs";
import { R as redirect, V as notFound, _ as createRootRouteWithContext, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DwkqEEKw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CJuZUoTb.css";
var STORAGE_KEY = "st-erp-theme";
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setThemeState(stored ?? (prefersDark ? "dark" : "light"));
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.colorScheme = theme;
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark")
	}), [theme, setTheme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
	return ctx;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$38 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Speech Therapy ERP — Multi-branch clinic platform" },
			{
				name: "description",
				content: "Enterprise frontend foundation for a multi-branch speech therapy clinic ERP."
			},
			{
				property: "og:title",
				content: "Speech Therapy ERP — Multi-branch clinic platform"
			},
			{
				property: "og:description",
				content: "Enterprise frontend foundation for a multi-branch speech therapy clinic ERP."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$38.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$36 = () => import("./routes-Bh-FY__y.mjs");
var Route$37 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Speech Therapy ERP — Multi-branch clinic management system" },
		{
			name: "description",
			content: "Multi-branch clinic management system for speech therapy practices."
		},
		{
			property: "og:title",
			content: "Speech Therapy ERP — Multi-branch clinic management system"
		},
		{
			property: "og:description",
			content: "Multi-branch clinic management system for speech therapy practices."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./auth-oaMO9hG-.mjs");
var Route$36 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./manager-BcLHsuLd.mjs");
var Route$35 = createFileRoute("/manager")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./super-admin-BPEZMlM2.mjs");
var Route$34 = createFileRoute("/super-admin")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./auth.index-BUzdNd91.mjs");
var Route$33 = createFileRoute("/auth/")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./auth.forgot-password-VhcIUMzI.mjs");
var Route$32 = createFileRoute("/auth/forgot-password")({
	head: () => ({ meta: [
		{ title: "Reset password — Speech Therapy ERP" },
		{
			name: "description",
			content: "Reset your Speech Therapy ERP workspace password."
		},
		{
			property: "og:title",
			content: "Reset password — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Reset your Speech Therapy ERP workspace password."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./auth.login-ByMAKhrO.mjs");
var loginSearchSchema = objectType({ mode: enumType(["email", "manager"]).optional() });
var Route$31 = createFileRoute("/auth/login")({
	validateSearch: loginSearchSchema,
	head: () => ({ meta: [
		{ title: "Sign in — Speech Therapy ERP" },
		{
			name: "description",
			content: "Sign in to the Speech Therapy ERP multi-branch clinic platform."
		},
		{
			property: "og:title",
			content: "Sign in — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Sign in to the Speech Therapy ERP multi-branch clinic platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./auth.register-mtPbrdgr.mjs");
var Route$30 = createFileRoute("/auth/register")({
	head: () => ({ meta: [
		{ title: "Request access — Speech Therapy ERP" },
		{
			name: "description",
			content: "Request a workspace account for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Request access — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Request a workspace account for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./manager.index-Cs6goFOi.mjs");
var Route$29 = createFileRoute("/manager/")({
	head: () => ({ meta: [
		{ title: "Branch Manager workspace — Speech Therapy ERP" },
		{
			name: "description",
			content: "Single-branch workspace shell for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Branch Manager workspace — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Single-branch workspace shell for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./manager.dashboard-CmFKaV9w.mjs");
var TITLE$11 = "Branch Dashboard — Speech Therapy ERP";
var DESCRIPTION$11 = "Daily operations command centre for a single branch: patients, sessions, payments, follow-ups and inventory.";
var Route$28 = createFileRoute("/manager/dashboard")({
	head: () => ({ meta: [
		{ title: TITLE$11 },
		{
			name: "description",
			content: DESCRIPTION$11
		},
		{
			property: "og:title",
			content: TITLE$11
		},
		{
			property: "og:description",
			content: DESCRIPTION$11
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./manager.revenue-Cqekxnmy.mjs");
var TITLE$10 = "Real-Time Revenue Management — Speech Therapy ERP";
var DESCRIPTION$10 = "Live revenue command centre tracking daily, monthly, and branch entire revenue across patient enrollments and therapy material sales.";
var Route$27 = createFileRoute("/manager/revenue")({
	head: () => ({ meta: [
		{ title: TITLE$10 },
		{
			name: "description",
			content: DESCRIPTION$10
		},
		{
			property: "og:title",
			content: TITLE$10
		},
		{
			property: "og:description",
			content: DESCRIPTION$10
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./manager.sales-CdbsfYo5.mjs");
var TITLE$9 = "Material Sales — Speech Therapy ERP";
var DESCRIPTION$9 = "Sales console for therapy materials: invoices, payment status, collected amounts and dues in BDT.";
var Route$26 = createFileRoute("/manager/sales")({
	head: () => ({ meta: [
		{ title: TITLE$9 },
		{
			name: "description",
			content: DESCRIPTION$9
		},
		{
			property: "og:title",
			content: TITLE$9
		},
		{
			property: "og:description",
			content: DESCRIPTION$9
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./super-admin.index-C3irbZBp.mjs");
var Route$25 = createFileRoute("/super-admin/")({
	head: () => ({ meta: [
		{ title: "Super Admin workspace — Speech Therapy ERP" },
		{
			name: "description",
			content: "Organisation-wide workspace shell for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Super Admin workspace — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Organisation-wide workspace shell for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./super-admin.dashboard-EyUHdRG1.mjs");
var title = "Super Admin Dashboard — Speech Therapy ERP";
var description = "Head-office command centre with branch performance, revenue, patient growth and system health across every Speech Therapy ERP location.";
var Route$24 = createFileRoute("/super-admin/dashboard")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./manager.assessments.index-BD4kLETf.mjs");
var Route$23 = createFileRoute("/manager/assessments/")({
	head: () => ({ meta: [
		{ title: "Assessment Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place."
		},
		{
			property: "og:title",
			content: "Assessment Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./manager.assessments._assessmentId-C1PjMjge.mjs");
var $$splitNotFoundComponentImporter$5 = () => import("./manager.assessments._assessmentId-BWbQAEk8.mjs");
var Route$22 = createFileRoute("/manager/assessments/$assessmentId")({
	loader: ({ params }) => {
		const assessment = findAssessment(params.assessmentId);
		if (!assessment) throw notFound();
		return { assessment };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Assessment not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { assessment } = loaderData;
		const title = `${assessment.code} — ${assessment.patientName} | Speech Therapy ERP`;
		const description = `Clinical assessment ${assessment.code} for ${assessment.patientName}: evaluation scores, diagnosis, therapy recommendation and treatment plan.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./manager.assessments.new-quqlbr4p.mjs");
var Route$21 = createFileRoute("/manager/assessments/new")({
	head: () => ({ meta: [
		{ title: "New Assessment — Speech Therapy ERP" },
		{
			name: "description",
			content: "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan."
		},
		{
			property: "og:title",
			content: "New Assessment — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./manager.expense.index-mSvQ1aMP.mjs");
var TITLE$8 = "Expense — Speech Therapy ERP";
var DESCRIPTION$8 = "Track branch expenses, manage approvals and monitor spending in BDT.";
var Route$20 = createFileRoute("/manager/expense/")({
	head: () => ({ meta: [
		{ title: TITLE$8 },
		{
			name: "description",
			content: DESCRIPTION$8
		},
		{
			property: "og:title",
			content: TITLE$8
		},
		{
			property: "og:description",
			content: DESCRIPTION$8
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./manager.follow-up.index-Cw3-ItBI.mjs");
var TITLE$7 = "Follow-up Management — Speech Therapy ERP";
var DESCRIPTION$7 = "Patient retention CRM for the branch: track follow-up calls, reminders, guardian communication and at-risk patients.";
var Route$19 = createFileRoute("/manager/follow-up/")({
	head: () => ({ meta: [
		{ title: TITLE$7 },
		{
			name: "description",
			content: DESCRIPTION$7
		},
		{
			property: "og:title",
			content: TITLE$7
		},
		{
			property: "og:description",
			content: DESCRIPTION$7
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./manager.follow-up._followUpId-DOSJ4nLy.mjs");
var $$splitNotFoundComponentImporter$4 = () => import("./manager.follow-up._followUpId-CfYXwQE0.mjs");
var Route$18 = createFileRoute("/manager/follow-up/$followUpId")({
	loader: ({ params }) => {
		const followUp = getFollowUp(params.followUpId);
		if (!followUp) throw notFound();
		return { followUp };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Follow-up unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.followUp.patientName} — Follow-up ${loaderData.followUp.code}`;
		const description = `Follow-up record for ${loaderData.followUp.patientName}: ${loaderData.followUp.reason}, ${loaderData.followUp.priority} priority, next contact ${loaderData.followUp.nextFollowUp}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./manager.materials.index-DO6BVKR4.mjs");
var TITLE$6 = "Materials & Sales — Speech Therapy ERP";
var DESCRIPTION$6 = "Inventory console for the branch: track therapy materials, educational toys, equipment stock levels and material sales in BDT.";
var Route$17 = createFileRoute("/manager/materials/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$6 },
		{
			name: "description",
			content: DESCRIPTION$6
		},
		{
			property: "og:title",
			content: TITLE$6
		},
		{
			property: "og:description",
			content: DESCRIPTION$6
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./manager.materials._materialId-DPXvQS4H.mjs");
var Route$16 = createFileRoute("/manager/materials/$materialId")({
	loader: ({ params }) => {
		const material = getMaterial(params.materialId);
		if (!material) throw notFound();
		return {
			material,
			sales: salesForMaterial(material.id),
			movements: movementsForMaterial(material.id),
			purchases: purchasesForMaterial(material.id)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Material not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.material.name} — Material Details`;
		const description = `Stock, pricing, supplier and sales history for ${loaderData.material.name} (${loaderData.material.code}).`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./manager.materials.new-DYEsZhrX.mjs");
var TITLE$5 = "Add Material — Speech Therapy ERP";
var DESCRIPTION$5 = "Register a new therapy material, educational toy or equipment item with pricing, stock levels and supplier details.";
var Route$15 = createFileRoute("/manager/materials/new")({
	head: () => ({ meta: [
		{ title: TITLE$5 },
		{
			name: "description",
			content: DESCRIPTION$5
		},
		{
			property: "og:title",
			content: TITLE$5
		},
		{
			property: "og:description",
			content: DESCRIPTION$5
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./manager.outdoor.index-Ct0vWyiy.mjs");
var TITLE$4 = "Outdoor Service Management — Speech Therapy ERP";
var DESCRIPTION$4 = "Plan and track outdoor therapy services: home visits, school visits, community programs, awareness sessions and special camps across Bangladesh.";
var Route$14 = createFileRoute("/manager/outdoor/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESCRIPTION$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESCRIPTION$4
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./manager.outdoor._visitId-C5F1-5ae.mjs");
var Route$13 = createFileRoute("/manager/outdoor/$visitId")({
	loader: ({ params }) => {
		const visit = OUTDOOR_VISITS.find((item) => item.id === params.visitId || item.visitId === params.visitId);
		if (!visit) throw notFound();
		return { visit };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Outdoor visit unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.visit.visitId} — Outdoor Visit for ${loaderData.visit.patientName}`;
		const description = `${loaderData.visit.type} on ${loaderData.visit.date} at ${loaderData.visit.time} in ${loaderData.visit.area}, handled by ${loaderData.visit.therapistName}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./manager.outdoor.new-BfnNsK9C.mjs");
var TITLE$3 = "Schedule Outdoor Visit — Speech Therapy ERP";
var DESCRIPTION$3 = "Schedule a home visit, school visit, community program or special camp for an outdoor therapy patient in five guided steps.";
var Route$12 = createFileRoute("/manager/outdoor/new")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESCRIPTION$3
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./manager.packages.index-BqiOHXIh.mjs");
var TITLE$2 = "Packages — Speech Therapy ERP";
var DESCRIPTION$2 = "Create and manage daily, session-wise, monthly and online booking therapy packages with pricing, duration and session rules.";
var Route$11 = createFileRoute("/manager/packages/")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./manager.patients.index-Bn4d7gk6.mjs");
var Route$10 = createFileRoute("/manager/patients/")({
	head: () => ({ meta: [
		{ title: "Patient Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console."
		},
		{
			property: "og:title",
			content: "Patient Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./manager.patients._patientId-Dl07KYl8.mjs");
var $$splitNotFoundComponentImporter$3 = () => import("./manager.patients._patientId-DFkt1AmH.mjs");
var Route$9 = createFileRoute("/manager/patients/$patientId")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	loader: ({ params }) => {
		const patient = findPatient(params.patientId);
		if (!patient) throw notFound();
		return { patient };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Patient not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { patient } = loaderData;
		const title = `${patient.name} — Patient Profile | Speech Therapy ERP`;
		const description = `Patient profile for ${patient.name} (${patient.code}): personal details, guardian information, therapy programme, package and payment summary.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./manager.payments.index-B3ZUuPdI.mjs");
var TITLE$1 = "Payment & Billing — Speech Therapy ERP";
var DESCRIPTION$1 = "Billing console for the branch: manage therapy packages, collect payments, issue invoices and monitor outstanding dues in BDT.";
var Route$8 = createFileRoute("/manager/payments/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESCRIPTION$1
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESCRIPTION$1
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./manager.payments._paymentId-BHPp-zjo.mjs");
var $$splitNotFoundComponentImporter$2 = () => import("./manager.payments._paymentId-RTNc9EHC.mjs");
var Route$7 = createFileRoute("/manager/payments/$paymentId")({
	loader: ({ params }) => {
		const profile = findPaymentProfile(params.paymentId);
		if (!profile) throw notFound();
		return { profile };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Payment record not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { primary } = loaderData.profile;
		const title = `${primary.receiptNo} — ${primary.patientName} | Speech Therapy ERP`;
		const description = `Payment profile for ${primary.patientName}: package billing, payment timeline, invoice history and outstanding dues.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./manager.payments.collect-CN97owRA.mjs");
var TITLE = "Collect Payment — Speech Therapy ERP";
var DESCRIPTION = "Record a therapy payment: pick the patient and package, apply discounts, capture the amount received and preview the remaining due in BDT.";
var Route$6 = createFileRoute("/manager/payments/collect")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$5 = createFileRoute("/manager/payments/packages")({ beforeLoad: () => {
	throw redirect({ to: "/manager/packages" });
} });
var $$splitComponentImporter$4 = () => import("./manager.therapy.index-DfbU5emD.mjs");
var Route$4 = createFileRoute("/manager/therapy/")({
	head: () => ({ meta: [
		{ title: "Therapy — Speech Therapy ERP" },
		{
			name: "description",
			content: "Manage therapy types offered at the branch — speech, ABA, occupational, sensory, group and individual sessions."
		},
		{
			property: "og:title",
			content: "Therapy — Speech Therapy ERP"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./manager.therapy._sessionId-DB3P0arp.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./manager.therapy._sessionId-DWjKcBvQ.mjs");
var Route$3 = createFileRoute("/manager/therapy/$sessionId")({
	loader: ({ params }) => {
		const session = findTherapySession(params.sessionId);
		if (!session) throw notFound();
		return { session };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Therapy session not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { session } = loaderData;
		const title = `${session.code} — ${session.patientName} | Speech Therapy ERP`;
		const description = `Therapy session ${session.code} for ${session.patientName}: session notes, goals, attendance and progress tracking.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./manager.therapy.new-CF7Vja8P.mjs");
var Route$2 = createFileRoute("/manager/therapy/new")({
	head: () => ({ meta: [
		{ title: "Schedule Therapy — Speech Therapy ERP" },
		{
			name: "description",
			content: "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals."
		},
		{
			property: "og:title",
			content: "Schedule Therapy — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./super-admin.branches.index-BZixCab-.mjs");
var Route$1 = createFileRoute("/super-admin/branches/")({
	head: () => ({ meta: [
		{ title: "Branch Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console."
		},
		{
			property: "og:title",
			content: "Branch Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./super-admin.branches._branchId-2ZU5nk3o.mjs");
var $$splitNotFoundComponentImporter = () => import("./super-admin.branches._branchId-Cf5MD3Ye.mjs");
var Route = createFileRoute("/super-admin/branches/$branchId")({
	loader: ({ params }) => {
		const branch = findBranch(params.branchId);
		if (!branch) throw notFound();
		return { branch };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Branch not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.branch.name} — Speech Therapy ERP`;
		const description = `Profile, manager details, revenue and staffing overview for ${loaderData.branch.name} in ${loaderData.branch.city}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$37.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$38
});
var AuthRoute = Route$36.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$38
});
var ManagerRoute = Route$35.update({
	id: "/manager",
	path: "/manager",
	getParentRoute: () => Route$38
});
var SuperAdminRoute = Route$34.update({
	id: "/super-admin",
	path: "/super-admin",
	getParentRoute: () => Route$38
});
var AuthIndexRoute = Route$33.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthRoute
});
var AuthForgotPasswordRoute = Route$32.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => AuthRoute
});
var AuthLoginRoute = Route$31.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AuthRoute
});
var AuthRegisterRoute = Route$30.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => AuthRoute
});
var ManagerIndexRoute = Route$29.update({
	id: "/",
	path: "/",
	getParentRoute: () => ManagerRoute
});
var ManagerDashboardRoute = Route$28.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => ManagerRoute
});
var ManagerRevenueRoute = Route$27.update({
	id: "/revenue",
	path: "/revenue",
	getParentRoute: () => ManagerRoute
});
var ManagerSalesRoute = Route$26.update({
	id: "/sales",
	path: "/sales",
	getParentRoute: () => ManagerRoute
});
var SuperAdminIndexRoute = Route$25.update({
	id: "/",
	path: "/",
	getParentRoute: () => SuperAdminRoute
});
var SuperAdminDashboardRoute = Route$24.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => SuperAdminRoute
});
var ManagerAssessmentsIndexRoute = Route$23.update({
	id: "/assessments/",
	path: "/assessments/",
	getParentRoute: () => ManagerRoute
});
var ManagerAssessmentsAssessmentIdRoute = Route$22.update({
	id: "/assessments/$assessmentId",
	path: "/assessments/$assessmentId",
	getParentRoute: () => ManagerRoute
});
var ManagerAssessmentsNewRoute = Route$21.update({
	id: "/assessments/new",
	path: "/assessments/new",
	getParentRoute: () => ManagerRoute
});
var ManagerExpenseIndexRoute = Route$20.update({
	id: "/expense/",
	path: "/expense/",
	getParentRoute: () => ManagerRoute
});
var ManagerFollowUpIndexRoute = Route$19.update({
	id: "/follow-up/",
	path: "/follow-up/",
	getParentRoute: () => ManagerRoute
});
var ManagerFollowUpFollowUpIdRoute = Route$18.update({
	id: "/follow-up/$followUpId",
	path: "/follow-up/$followUpId",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsIndexRoute = Route$17.update({
	id: "/materials/",
	path: "/materials/",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsMaterialIdRoute = Route$16.update({
	id: "/materials/$materialId",
	path: "/materials/$materialId",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsNewRoute = Route$15.update({
	id: "/materials/new",
	path: "/materials/new",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorIndexRoute = Route$14.update({
	id: "/outdoor/",
	path: "/outdoor/",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorVisitIdRoute = Route$13.update({
	id: "/outdoor/$visitId",
	path: "/outdoor/$visitId",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorNewRoute = Route$12.update({
	id: "/outdoor/new",
	path: "/outdoor/new",
	getParentRoute: () => ManagerRoute
});
var ManagerPackagesIndexRoute = Route$11.update({
	id: "/packages/",
	path: "/packages/",
	getParentRoute: () => ManagerRoute
});
var ManagerPatientsIndexRoute = Route$10.update({
	id: "/patients/",
	path: "/patients/",
	getParentRoute: () => ManagerRoute
});
var ManagerPatientsPatientIdRoute = Route$9.update({
	id: "/patients/$patientId",
	path: "/patients/$patientId",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsIndexRoute = Route$8.update({
	id: "/payments/",
	path: "/payments/",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsPaymentIdRoute = Route$7.update({
	id: "/payments/$paymentId",
	path: "/payments/$paymentId",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsCollectRoute = Route$6.update({
	id: "/payments/collect",
	path: "/payments/collect",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsPackagesRoute = Route$5.update({
	id: "/payments/packages",
	path: "/payments/packages",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapyIndexRoute = Route$4.update({
	id: "/therapy/",
	path: "/therapy/",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapySessionIdRoute = Route$3.update({
	id: "/therapy/$sessionId",
	path: "/therapy/$sessionId",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapyNewRoute = Route$2.update({
	id: "/therapy/new",
	path: "/therapy/new",
	getParentRoute: () => ManagerRoute
});
var SuperAdminBranchesIndexRoute = Route$1.update({
	id: "/branches/",
	path: "/branches/",
	getParentRoute: () => SuperAdminRoute
});
var SuperAdminBranchesBranchIdRoute = Route.update({
	id: "/branches/$branchId",
	path: "/branches/$branchId",
	getParentRoute: () => SuperAdminRoute
});
var AuthRouteChildren = {
	AuthForgotPasswordRoute,
	AuthLoginRoute,
	AuthRegisterRoute,
	AuthIndexRoute
};
var AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
var ManagerRouteChildren = {
	ManagerDashboardRoute,
	ManagerRevenueRoute,
	ManagerSalesRoute,
	ManagerIndexRoute,
	ManagerAssessmentsAssessmentIdRoute,
	ManagerAssessmentsNewRoute,
	ManagerFollowUpFollowUpIdRoute,
	ManagerMaterialsMaterialIdRoute,
	ManagerMaterialsNewRoute,
	ManagerOutdoorVisitIdRoute,
	ManagerOutdoorNewRoute,
	ManagerPatientsPatientIdRoute,
	ManagerPaymentsPaymentIdRoute,
	ManagerPaymentsCollectRoute,
	ManagerPaymentsPackagesRoute,
	ManagerTherapySessionIdRoute,
	ManagerTherapyNewRoute,
	ManagerAssessmentsIndexRoute,
	ManagerExpenseIndexRoute,
	ManagerFollowUpIndexRoute,
	ManagerMaterialsIndexRoute,
	ManagerOutdoorIndexRoute,
	ManagerPackagesIndexRoute,
	ManagerPatientsIndexRoute,
	ManagerPaymentsIndexRoute,
	ManagerTherapyIndexRoute
};
var ManagerRouteWithChildren = ManagerRoute._addFileChildren(ManagerRouteChildren);
var SuperAdminRouteChildren = {
	SuperAdminDashboardRoute,
	SuperAdminIndexRoute,
	SuperAdminBranchesBranchIdRoute,
	SuperAdminBranchesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthRoute: AuthRouteWithChildren,
	ManagerRoute: ManagerRouteWithChildren,
	SuperAdminRoute: SuperAdminRoute._addFileChildren(SuperAdminRouteChildren)
};
var routeTree = Route$38._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$8 as a, Route$14 as c, Route$18 as d, Route$22 as f, Route$7 as i, Route$16 as l, useTheme as m, Route as n, Route$9 as o, Route$31 as p, Route$3 as r, Route$13 as s, router_exports as t, Route$17 as u };
