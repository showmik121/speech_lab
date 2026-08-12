import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/manager/payments/packages")({
  beforeLoad: () => {
    throw redirect({ to: "/manager/packages" });
  },
});
