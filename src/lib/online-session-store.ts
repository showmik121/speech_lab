import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  FIXED_ONLINE_SERVICES,
  type FixedOnlineService,
} from "@/constants/online-session-data";

const STORAGE_KEY_SERVICES = "speech_lab_fixed_online_services";
const EVENT_NAME = "speech_lab_fixed_services_updated";

function notifyChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT_NAME));
  }
}

export function getStoredFixedServices(): FixedOnlineService[] {
  if (typeof window === "undefined") return FIXED_ONLINE_SERVICES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SERVICES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(FIXED_ONLINE_SERVICES));
      return FIXED_ONLINE_SERVICES;
    }
    const parsed = JSON.parse(raw) as FixedOnlineService[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(FIXED_ONLINE_SERVICES));
      return FIXED_ONLINE_SERVICES;
    }
    return parsed;
  } catch {
    return FIXED_ONLINE_SERVICES;
  }
}

export function setStoredFixedServices(services: FixedOnlineService[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
  notifyChange();
}

/**
 * Generate a clean stable ID for new online services
 */
export function generateServiceId(name: string): string {
  const cleanSlug = name
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 20);
  const suffix = Date.now().toString().slice(-4);
  return cleanSlug ? `SRV_${cleanSlug}_${suffix}` : `SRV_ONLINE_${suffix}`;
}

/**
 * Hook for managing, creating and editing Online Services
 */
export function useFixedOnlineServices() {
  const [services, setServices] = useState<FixedOnlineService[]>([]);

  const loadData = () => {
    setServices(getStoredFixedServices());
  };

  useEffect(() => {
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

  const createService = (
    newServiceData: Omit<FixedOnlineService, "id" | "bookingType">,
  ) => {
    const all = getStoredFixedServices();
    const id = generateServiceId(newServiceData.name);
    const created: FixedOnlineService = {
      ...newServiceData,
      id,
      bookingType: "Advance / Booking",
    };
    const updated = [...all, created];
    setStoredFixedServices(updated);
    toast.success("Online service created successfully.");
    return created;
  };

  const updateService = (
    id: string,
    patch: Partial<Omit<FixedOnlineService, "id" | "bookingType">>,
  ) => {
    const all = getStoredFixedServices();
    const updated = all.map((item) =>
      item.id === id ? { ...item, ...patch } : item,
    );
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
    resetToDefaults,
  };
}
