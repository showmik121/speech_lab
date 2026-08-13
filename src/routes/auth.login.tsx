import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Building2, KeyRound, Mail, Lock, ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/forms/form-field";
import { loginWithManagerId } from "@/lib/manager-session";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { APP_NAME } from "@/constants/app";

const loginSearchSchema = z.object({
  mode: z.enum(["email", "manager"]).optional(),
});

export const Route = createFileRoute("/auth/login")({
  validateSearch: loginSearchSchema,
  head: () => ({
    meta: [
      { title: "Sign in — Speech Therapy ERP" },
      { name: "description", content: "Sign in to the Speech Therapy ERP multi-branch clinic platform." },
      { property: "og:title", content: "Sign in — Speech Therapy ERP" },
      { property: "og:description", content: "Sign in to the Speech Therapy ERP multi-branch clinic platform." },
    ],
  }),
  component: LoginPage,
});

type LoginMode = "email" | "manager";

function LoginPage() {
  const navigate = useNavigate();
  const { mode: initialMode } = Route.useSearch();
  const [mode, setMode] = useState<LoginMode>(initialMode ?? "manager");
  const [managerId, setManagerId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      if (mode === "manager") {
        const branch = loginWithManagerId(managerId);
        if (!branch) {
          setError("Invalid manager unique key. Please check the key provided by your administrator.");
          setLoading(false);
          return;
        }
        navigate({ to: "/manager" });
      } else {
        // Mock email sign-in logic for the gorgeous UI
        if (email.includes("admin") || email === "admin@speecherp.com") {
          navigate({ to: "/super-admin/dashboard" });
        } else {
          // Default branch manager mode mapping for any typical login demo
          const branch = loginWithManagerId("MGR-DHK-001"); 
          navigate({ to: "/manager" });
        }
      }
      setLoading(false);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
        {/* Brand/Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/20 mb-4">
            <Activity className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">{APP_NAME}</h2>
          <p className="text-xs text-slate-400 mt-1.5">Secure Authentication Portal</p>
        </div>

        {/* Mode switch pills */}
        <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-slate-950 p-1 mb-6 border border-white/5">
          <button
            type="button"
            onClick={() => {
              setMode("manager");
              setError(null);
            }}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-all ${
              mode === "manager"
                ? "bg-slate-900 text-white shadow-md border border-white/5"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
            Manager Key
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("email");
              setError(null);
            }}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-all ${
              mode === "email"
                ? "bg-slate-900 text-white shadow-md border border-white/5"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Email Login
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <Alert variant="destructive" className="mb-6 bg-red-950/20 border-red-500/30 text-red-400">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Forms */}
        <form className="space-y-5" onSubmit={handleLogin}>
          {mode === "manager" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="manager-id" className="text-xs font-semibold uppercase tracking-wider text-slate-400">Manager Unique Key</Label>
                <div className="relative">
                  <Building2
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                    aria-hidden="true"
                  />
                  <Input
                    id="manager-id"
                    value={managerId}
                    onChange={(event) => setManagerId(event.target.value)}
                    placeholder="e.g. MGR-DHK-001"
                    className="pl-9 bg-slate-950 border-white/10 text-white focus:border-blue-500/50 font-mono text-[13px] uppercase placeholder:normal-case h-10 rounded-lg placeholder:text-slate-600"
                    required
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <p className="text-[11px] text-slate-500">Provide the branch key given by your administrator.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">Work Email</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@clinic.example"
                    className="pl-9 bg-slate-950 border-white/10 text-white focus:border-blue-500/50 h-10 rounded-lg placeholder:text-slate-600"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-slate-400">Password</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-9 bg-slate-950 border-white/10 text-white focus:border-blue-500/50 h-10 rounded-lg placeholder:text-slate-600"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {mode === "email" && (
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-white/20 bg-slate-950 text-blue-500" />
                <Label htmlFor="remember" className="text-slate-400">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                Forgot password?
              </a>
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full h-10 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Verifying Credentials...
              </span>
            ) : mode === "manager" ? (
              "Access My Branch Workspace"
            ) : (
              "Sign In to System"
            )}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <button
            onClick={() => navigate({ to: "/" })}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to homepage
          </button>
        </div>
      </div>
    </div>
  );
}