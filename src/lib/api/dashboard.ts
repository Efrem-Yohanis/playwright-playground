import { API_BASE, authFetch, authHeaders, handleResponse } from "./base";

export interface DashboardSummary {
  total_campaigns: number;
  active_campaigns: number;
  completed_campaigns: number;
  draft_campaigns: number;
  total_recipients: number;
  total_sent: number;
  total_delivered: number;
  total_failed: number;
  avg_delivery_rate: number;
  by_status: Record<string, number>;
  recent_campaigns: {
    id: number;
    name: string;
    status: string;
    progress_percent: number;
    updated_at: string;
  }[];
}

export async function fetchDashboardSummary(): Promise<DashboardSummary> {
  const res = await authFetch(`${API_BASE}/api/campaigns/summary/`, { headers: authHeaders() });
  return handleResponse<DashboardSummary>(res);
}
