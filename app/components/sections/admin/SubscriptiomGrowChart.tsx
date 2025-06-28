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

const growthData = [
  { date: "Jun 01", active: 1, newSubs: 2, cancelled: 0 },
  { date: "Jun 08", active: 0, newSubs: 1, cancelled: 1 },
  { date: "Jun 15", active: 4, newSubs: 2, cancelled: 1 },
  { date: "Jun 22", active: 4, newSubs: 0, cancelled: 0 },
  { date: "Jun 29", active: 3, newSubs: 1, cancelled: 0 },
];

export function SubscriptionGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>👥 Subscription Growth</CardTitle>
        <p className="text-sm text-muted-foreground">
          Active subscriptions growth over time
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="active"
              stroke="#f97316"
              name="Active"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="newSubs"
              stroke="#22c55e"
              name="New"
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="#ef4444"
              name="Cancelled"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
