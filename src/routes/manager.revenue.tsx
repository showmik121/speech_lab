import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Banknote,
  Building2,
  Calendar,
  Plus,
  RefreshCw,
  RotateCcw,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UserPlus,
  Wallet,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RegisterPatientDialog } from "@/components/patients/register-patient-dialog";
import { NewSaleDialog } from "@/components/materials/new-sale-dialog";
import { CollectPaymentDialog } from "@/components/payments/collect-payment-dialog";
import { RevenueKpiCards } from "@/components/manager/revenue-kpi-cards";
import { RevenueAnalyticsCharts } from "@/components/manager/revenue-analytics-charts";
import { LiveTransactionTable } from "@/components/manager/live-transaction-table";
import { BRANCHES } from "@/constants/branch-data";
import { formatTaka } from "@/constants/dashboard-data";
import { getActiveBranch } from "@/lib/manager-session";
import {
  addRevenueTransaction,
  resetRevenueTransactions,
  useRevenueStore,
} from "@/lib/revenue-store";

const TITLE = "Real-Time Revenue Management — Speech Therapy ERP";
const DESCRIPTION =
  "Live revenue command centre tracking daily, monthly, and branch entire revenue across patient enrollments and therapy material sales.";

export const Route = createFileRoute("/manager/revenue")({
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
  component: ManagerRevenuePage,
});

function ManagerRevenuePage() {
  const currentBranch = getActiveBranch();
  const activeBranchId = currentBranch?.id || "dhaka-main";
  const activeBranchName = currentBranch?.name || "Dhaka Main Branch";

  const {
    transactions,
    dailyRevenue,
    dailyCount,
    monthlyRevenue,
    monthlyCount,
    entireRevenue,
    totalCount,
    enrollmentRevenue,
    salesRevenue,
    sessionRevenue,
    branchSummaries,
  } = useRevenueStore(activeBranchId);

  const [registerOpen, setRegisterOpen] = useState(false);
  const [saleOpen, setSaleOpen] = useState(false);
  const [collectOpen, setCollectOpen] = useState(false);

  // Simulate a live purchase or enrollment for instant live testing
  const handleSimulateLive = () => {
    const mockNames = [
      "Zayan Chowdhury",
      "Anika Rahman",
      "Tanvir Hossain",
      "Mehedi Hasan",
      "Sabrina Yasmin",
      "Rafi Ahmed",
    ];
    const mockCategories: Array<"Patient Enrollment" | "Material Sale" | "Therapy Session"> = [
      "Patient Enrollment",
      "Material Sale",
      "Therapy Session",
    ];
    const mockMethods: Array<"Mobile Banking" | "Cash" | "Card"> = ["Mobile Banking", "Cash", "Card"];

    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
    const randomCat = mockCategories[Math.floor(Math.random() * mockCategories.length)];
    const randomMethod = mockMethods[Math.floor(Math.random() * mockMethods.length)];

    let amount = 1500;
    let remarks = "Single Assessment Session";
    if (randomCat === "Patient Enrollment") {
      amount = 12000 + Math.floor(Math.random() * 6000);
      remarks = "New Speech Package Enrollment";
    } else if (randomCat === "Material Sale") {
      amount = 2500 + Math.floor(Math.random() * 3000);
      remarks = "Therapy Kit & Material POS Purchase";
    }

    addRevenueTransaction({
      patientOrCustomerName: randomName,
      category: randomCat,
      amount,
      paidAmount: amount,
      dueAmount: 0,
      method: randomMethod,
      remarks,
    });
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Revenue Command Console"
        description="Real-time live monitoring of daily, monthly, and branch entire revenue."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Revenue" },
        ]}
      />

      {/* KPI Cards Section */}
      <section aria-label="Revenue KPI overview">
        <RevenueKpiCards
          dailyRevenue={dailyRevenue}
          dailyCount={dailyCount}
          monthlyRevenue={monthlyRevenue}
          monthlyCount={monthlyCount}
          entireRevenue={entireRevenue}
          totalCount={totalCount}
          enrollmentRevenue={enrollmentRevenue}
          salesRevenue={salesRevenue}
          sessionRevenue={sessionRevenue}
          branchName={activeBranchName}
        />
      </section>

      {/* Analytics Charts */}
      <section aria-label="Revenue analytics charts">
        <RevenueAnalyticsCharts
          transactions={transactions}
          branchSummaries={branchSummaries}
        />
      </section>

      {/* Real-time Activity Table Stream */}
      <section aria-label="Real-time activity table">
        <LiveTransactionTable
          transactions={transactions}
          onSimulate={handleSimulateLive}
        />
      </section>

      {/* Dialog Modals */}
      <RegisterPatientDialog open={registerOpen} onOpenChange={setRegisterOpen} />
      <NewSaleDialog open={saleOpen} onOpenChange={setSaleOpen} />
      <CollectPaymentDialog open={collectOpen} onOpenChange={setCollectOpen} />
    </div>
  );
}
