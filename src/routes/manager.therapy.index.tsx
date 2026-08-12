import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { TherapyCard } from "@/components/therapy/therapy-card";
import { CreateTherapyDialog } from "@/components/therapy/create-therapy-dialog";
import { EditTherapyDialog } from "@/components/therapy/edit-therapy-dialog";
import { THERAPY_TYPES, type TherapyType } from "@/constants/therapy-types";

export const Route = createFileRoute("/manager/therapy/")({
  head: () => ({
    meta: [
      { title: "Therapy — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Manage therapy types offered at the branch — speech, ABA, occupational, sensory, group and individual sessions.",
      },
      { property: "og:title", content: "Therapy — Speech Therapy ERP" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TherapyPage,
});

function TherapyPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editItem, setEditItem] = useState<TherapyType | null>(null);

  const openEdit = (item: TherapyType) => {
    setEditItem(item);
    setEditOpen(true);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Therapy"
        description="Manage therapy types, session fees and availability."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Therapy" },
        ]}
        actions={
          <Button onClick={() => setCreateOpen(true)}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add Therapy
          </Button>
        }
      />

      {THERAPY_TYPES.length === 0 ? (
        <EmptyState
          icon={Activity}
          title="No Therapy Types"
          description="Add your first therapy type to get started."
          action={
            <Button onClick={() => setCreateOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add Therapy
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {THERAPY_TYPES.map((item) => (
            <TherapyCard key={item.id} item={item} onEdit={openEdit} />
          ))}
        </div>
      )}

      <CreateTherapyDialog open={createOpen} onOpenChange={setCreateOpen} />
      <EditTherapyDialog open={editOpen} onOpenChange={setEditOpen} item={editItem} />
    </div>
  );
}
