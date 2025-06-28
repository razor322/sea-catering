// components/admin/RevenueTrendChart.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jun 01", revenue: 1000000 },
  { date: "Jun 08", revenue: 1500000 },
  { date: "Jun 15", revenue: 2000000 },
  { date: "Jun 22", revenue: 2400000 },
  { date: "Jun 28", revenue: 3000000 },
  { date: "Jul 1", revenue: 2900000 },
];

export function RevenueTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🌄 Revenue Trend</CardTitle>
        <p className="text-sm text-muted-foreground">
          Monthly revenue and subscription growth over time
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
            <Tooltip
              formatter={(value: number) =>
                `Rp${value.toLocaleString("id-ID")}`
              }
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
