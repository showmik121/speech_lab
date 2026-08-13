import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Edit,
  Filter,
  MapPin,
  Search,
  Stethoscope,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import { type DailySessionItem } from "@/constants/daily-session-data";
import { useDailySessionStore } from "@/lib/daily-session-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormField } from "@/components/forms/form-field";
import { Textarea } from "@/components/ui/textarea";

const TITLE = "Daily Session — Speech Therapy ERP";
const DESCRIPTION =
  "Configure outdoor home visit therapy sessions and specialist clinical consultation fees.";

export const Route = createFileRoute("/manager/daily-session/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DailySessionPage,
});

function DailySessionPage() {
  const { sessions, updateSession } = useDailySessionStore();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Outdoor Session" | "Consultation Fee">("All");

  const [editItem, setEditItem] = useState<DailySessionItem | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  const [editPrice, setEditPrice] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editDuration, setEditDuration] = useState("");

  const filteredSessions = useMemo(() => {
    return sessions.filter((item) => {
      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = categoryFilter === "All" || item.category === categoryFilter;
      return matchesSearch && matchesCat;
    });
  }, [sessions, search, categoryFilter]);

  const openEdit = (item: DailySessionItem) => {
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
      durationLabel: editDuration || editItem.durationLabel,
    });
    setEditOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* Header — No Collect Payment button */}
      <PageHeader
        title="Daily Session"
        description="Configure outdoor home visit therapy sessions and specialist clinical consultation fees."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Daily Session" },
        ]}
      />

      {/* Filter & Search Toolbar */}
      <section className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search daily sessions by name or code..."
            className="h-10 bg-background/80 pl-9 pr-4 text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 mr-1">
            <Filter className="h-3.5 w-3.5" /> Filter:
          </span>
          <button
            type="button"
            onClick={() => setCategoryFilter("All")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              categoryFilter === "All"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All Services
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter("Outdoor Session")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              categoryFilter === "Outdoor Session"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Outdoor Visits
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter("Consultation Fee")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              categoryFilter === "Consultation Fee"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            Consultations
          </button>
        </div>
      </section>

      {/* Professional Service Cards Grid */}
      <section aria-label="Daily session service catalog" className="space-y-4">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredSessions.map((item) => {
            const isOutdoor = item.id === "ds-outdoor";
            const IconComponent = isOutdoor ? MapPin : Stethoscope;

            return (
              <Card
                key={item.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 transition-all duration-200 p-6 shadow-md hover:shadow-xl ${
                  isOutdoor
                    ? "border-emerald-500/35 bg-gradient-to-br from-card via-card to-emerald-500/5 hover:border-emerald-500/60"
                    : "border-blue-500/35 bg-gradient-to-br from-card via-card to-blue-500/5 hover:border-blue-500/60"
                }`}
              >
                <div>
                  {/* Top Bar Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-md ${
                          isOutdoor
                            ? "bg-gradient-to-tr from-emerald-600 to-teal-500"
                            : "bg-gradient-to-tr from-blue-600 to-indigo-500"
                        }`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                            {item.code}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              isOutdoor
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                                : "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground mt-0.5">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                    <StatusBadge tone="success" label={item.status} />
                  </div>

                  {/* Fee Breakdown Box */}
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-border/80 bg-muted/30 px-4 py-3.5 backdrop-blur-xs">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Standard Service Fee
                      </span>
                      <p className="text-3xl font-extrabold tracking-tight tabular-nums text-foreground mt-0.5">
                        {formatTaka(item.price)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-background border border-border px-3 py-1.5 text-xs font-semibold text-foreground shadow-2xs">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {item.durationLabel}
                      </span>
                      <span className="text-[11px] text-muted-foreground">1 Session / Booking</span>
                    </div>
                  </div>

                  {/* Description & Included Features */}
                  <div className="mt-5 space-y-3.5">
                    <p className="text-sm leading-relaxed text-foreground/90 font-medium">
                      {item.description}
                    </p>

                    <div className="rounded-xl border border-border/60 bg-card/80 p-3.5 text-xs space-y-2">
                      <p className="font-semibold text-muted-foreground uppercase text-[10.5px] tracking-wider">
                        Included Features & Protocol
                      </p>
                      <div className="flex items-start gap-2 text-foreground/90">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isOutdoor ? "text-emerald-500" : "text-blue-500"
                          }`}
                        />
                        <span>{item.hint}</span>
                      </div>
                      <div className="flex items-start gap-2 text-foreground/90">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isOutdoor ? "text-emerald-500" : "text-blue-500"
                          }`}
                        />
                        <span>
                          {isOutdoor
                            ? "Customized home-based speech intervention & caregiver guidance."
                            : "Detailed assessment report & personalized therapy roadmap."}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Controls — Edit button only */}
                <div className="mt-6 flex items-center justify-end border-t border-border/80 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEdit(item)}
                    className="h-9 text-xs font-semibold gap-1.5 border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    Edit Details & Fee
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Edit Session Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Edit {editItem?.name}</DialogTitle>
            <DialogDescription>
              Update service description, duration, or session fee in BDT.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <FormField id="edit-price" label="Session Fee (৳)" required>
              <Input
                id="edit-price"
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </FormField>

            <FormField id="edit-duration" label="Duration Label">
              <Input
                id="edit-duration"
                value={editDuration}
                onChange={(e) => setEditDuration(e.target.value)}
              />
            </FormField>

            <FormField id="edit-desc" label="Description">
              <Textarea
                id="edit-desc"
                rows={3}
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
            </FormField>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-3">
            <Button variant="ghost" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
