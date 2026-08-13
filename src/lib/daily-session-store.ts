import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatTaka } from "@/constants/dashboard-data";
import { DAILY_SESSIONS, type DailySessionItem } from "@/constants/daily-session-data";

const STORAGE_KEY = "speech_lab_daily_sessions_v1";
const EVENT_NAME = "speech_lab_daily_sessions_updated";

export function getStoredDailySessions(): DailySessionItem[] {
  if (typeof window === "undefined") return DAILY_SESSIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DAILY_SESSIONS));
      return DAILY_SESSIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DAILY_SESSIONS;
  } catch {
    return DAILY_SESSIONS;
  }
}

export function saveDailySessions(items: DailySessionItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch (err) {
    console.error("Error saving daily sessions to localStorage", err);
  }
}

export function updateDailySessionItem(updatedItem: DailySessionItem) {
  const existing = getStoredDailySessions();
  const updated = existing.map((item) => (item.id === updatedItem.id ? updatedItem : item));
  saveDailySessions(updated);
  toast.success(`${updatedItem.name} Updated`, {
    description: `New Fee: ${formatTaka(updatedItem.price)} (${updatedItem.durationLabel})`,
  });
}

export function useDailySessionStore() {
  const [sessions, setSessions] = useState<DailySessionItem[]>(getStoredDailySessions);

  useEffect(() => {
    setSessions(getStoredDailySessions());

    const handleUpdate = () => {
      setSessions(getStoredDailySessions());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return {
    sessions,
    updateSession: updateDailySessionItem,
  };
}
