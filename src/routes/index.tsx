import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  ShieldCheck,
  TrendingUp,
  Users,
  CalendarCheck,
  Wallet,
  Globe,
  Building,
  HeartHandshake
} from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/app";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speech Therapy ERP — Multi-branch clinic management system" },
      {
        name: "description",
        content:
          "Multi-branch clinic management system for speech therapy practices.",
      },
      {
        property: "og:title",
        content: "Speech Therapy ERP — Multi-branch clinic management system",
      },
      {
        property: "og:description",
        content:
          "Multi-branch clinic management system for speech therapy practices.",
      },
    ],
  }),
  component: EntryPage,
});

function EntryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-primary selection:text-primary-foreground">
      {/* Grid decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/20">
            <Activity className="h-5 w-5 animate-pulse" aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {APP_NAME}
            </h1>
            <p className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">Clinic OS</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-slate-400 hover:text-white text-sm" asChild>
            <Link to="/auth/login" search={{ mode: "manager" }}>
              Quick Login
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Hero & Select Portal */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-center">
        {/* Left side info */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <HeartHandshake className="h-3 w-3" /> Professional Clinic ERP
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Care Orchestration <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Simplified & Scaled
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
            Empower your therapists, manage billing, scale branches, and analyze real-time patient enrollment data in one centralized command centre.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 max-w-md mx-auto lg:mx-0 border-t border-white/5">
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-xs text-slate-500 mt-1">Active Branches</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1.2k+</p>
              <p className="text-xs text-slate-500 mt-1">Enrolled Patients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-xs text-slate-500 mt-1">System Uptime</p>
            </div>
          </div>
        </div>

        {/* Right side workspaces selector */}
        <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-xl font-bold text-white mb-2">Welcome to Clinic Portal</h3>
          <p className="text-sm text-slate-400 mb-6">Select your workspace role to access your dedicated terminal dashboard.</p>

          <div className="space-y-4">
            {/* Super Admin option */}
            <Card className="bg-slate-950/80 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group relative overflow-hidden">
              <CardContent className="p-5 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">Super Admin Dashboard</p>
                  <p className="text-xs text-slate-500 mt-0.5">Head office control & billing analytics</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                <Link to="/super-admin" className="absolute inset-0 z-10" aria-label="Open Super Admin Dashboard" />
              </CardContent>
            </Card>

            {/* Branch Manager option */}
            <Card className="bg-slate-950/80 border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 group relative overflow-hidden">
              <CardContent className="p-5 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Building2 className="h-6 w-6" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">Branch Manager Portal</p>
                  <p className="text-xs text-slate-500 mt-0.5">Manage daily operations, packages & sessions</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                <Link to="/auth/login" search={{ mode: "manager" }} className="absolute inset-0 z-10" aria-label="Open Manager Login" />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
          <a href="#" className="hover:text-slate-400">Help Desk Support</a>
        </div>
      </footer>
    </div>
  );
}