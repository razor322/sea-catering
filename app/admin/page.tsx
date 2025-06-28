"use client";

import { useState, useEffect } from "react";
import { subDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { DateRangePicker } from "@/components/ui/date-range-picker";
import MetricsCards from "../components/sections/admin/MetricsCards";
import { getAdminMetrics } from "../lib/admin/metrics";
import { RevenueTrendChart } from "../components/sections/admin/RevenueTrendChart";
import { SubscriptionGrowthChart } from "../components/sections/admin/SubscriptiomGrowChart";
import { PlanDistributionChart } from "../components/sections/admin/PlanDistribution";

export default function AdminPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const [metrics, setMetrics] = useState({
    newSubscriptions: 0,
    mrr: 0,
    reactivations: 0,
    activeSubscriptions: 0,
  });

  useEffect(() => {
    async function fetchMetrics() {
      if (!date?.from || !date?.to) return;

      const data = await getAdminMetrics();

      setMetrics(data);
    }

    fetchMetrics();
  }, [date]);

  return (
    <>
      <main className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Monitor and manage your catering business
            </p>
          </div>

          <DateRangePicker date={date} setDate={setDate} />
        </div>

        <MetricsCards metrics={metrics} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevenueTrendChart />
          <SubscriptionGrowthChart />
        </div>
        <PlanDistributionChart />
      </main>
    </>
  );
}
