import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Filter, Plus, RotateCcw, Search, Video } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FixedOnlineServiceCard } from "@/components/online-session/fixed-online-service-card";
import { CreateOnlineServiceDialog } from "@/components/online-session/create-online-service-dialog";
import { EditOnlineServiceDialog } from "@/components/online-session/edit-online-service-dialog";
import { useFixedOnlineServices } from "@/lib/online-session-store";
import {
  SERVICE_CATEGORIES,
  type FixedOnlineService,
} from "@/constants/online-session-data";

const TITLE = "Online Session Management — Speech Therapy ERP";
const DESCRIPTION =
  "Manage predefined online speech therapy services, session pricing, duration, online platforms and advance booking configurations.";

export const Route = createFileRoute("/manager/online-session")({
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
  component: OnlineSessionPage,
});

function OnlineSessionPage() {
  const { services, createService, updateService, resetToDefaults } =
    useFixedOnlineServices();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<FixedOnlineService | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const filteredServices = useMemo(() => {
    return services.filter((item) => {
      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchesCat = selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [services, search, selectedCategory]);

  const handleOpenEdit = (service: FixedOnlineService) => {
    setEditingService(service);
    setEditDialogOpen(true);
  };

  const handleSaveService = (
    id: string,
    data: Partial<Omit<FixedOnlineService, "id" | "bookingType">>,
  ) => {
    updateService(id, data);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <PageHeader
        title="Online Session"
        description="Configure remote tele-speech services, duration, digital meeting platforms & advance booking rules."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Online Session" },
        ]}
        actions={
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={resetToDefaults}
              className="h-9 gap-1.5 text-xs text-muted-foreground hover:text-foreground shadow-2xs"
              title="Reset to default service configurations"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Defaults
            </Button>

            <Button
              onClick={() => setCreateDialogOpen(true)}
              className="h-9 gap-1.5 text-xs bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Online Service
            </Button>
          </div>
        }
      />

      {/* Search & Filter Bar */}
      <section className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search online services by title, category, or platform..."
            className="h-10 bg-background/80 pl-9 pr-4 text-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 mr-1">
            <Filter className="h-3.5 w-3.5" /> Category:
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === "All"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            All ({services.length})
          </button>
          {SERVICE_CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Cards Grid */}
      <section aria-label="Online Services Grid">
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <Video className="mx-auto h-10 w-10 text-muted-foreground/50" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">No online services found</h3>
            <p className="mt-1 text-xs text-muted-foreground">Try adjusting your search or category filters.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <FixedOnlineServiceCard
                key={service.id}
                service={service}
                onEdit={handleOpenEdit}
              />
            ))}
          </div>
        )}
      </section>

      {/* Create Service Dialog */}
      <CreateOnlineServiceDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreate={createService}
      />

      {/* Edit Service Dialog */}
      <EditOnlineServiceDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        service={editingService}
        onSave={handleSaveService}
      />
    </div>
  );
}
