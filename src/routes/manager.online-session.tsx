import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Plus, RotateCcw } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { FixedOnlineServiceCard } from "@/components/online-session/fixed-online-service-card";
import { CreateOnlineServiceDialog } from "@/components/online-session/create-online-service-dialog";
import { EditOnlineServiceDialog } from "@/components/online-session/edit-online-service-dialog";
import { useFixedOnlineServices } from "@/lib/online-session-store";
import { type FixedOnlineService } from "@/constants/online-session-data";

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
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<FixedOnlineService | null>(
    null,
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);

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
      {/* 1. Page Header */}
      <PageHeader
        title="Online Session"
        description="Manage online services"
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Packages", to: "/manager/packages" },
          { label: "Online Session" },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetToDefaults}
              className="h-9 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              title="Reset to default service configurations"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Defaults
            </Button>

            <Button
              onClick={() => setCreateDialogOpen(true)}
              className="h-9 gap-1.5 text-xs shadow-xs"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              + Create Online Service
            </Button>
          </div>
        }
      />

      {/* 2. Online Services Cards Grid */}
      <section aria-label="Online Services">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FixedOnlineServiceCard
              key={service.id}
              service={service}
              onEdit={handleOpenEdit}
            />
          ))}
        </div>
      </section>

      {/* 3. Create Service Dialog */}
      <CreateOnlineServiceDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreate={createService}
      />

      {/* 4. Edit Service Dialog */}
      <EditOnlineServiceDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        service={editingService}
        onSave={handleSaveService}
      />
    </div>
  );
}
