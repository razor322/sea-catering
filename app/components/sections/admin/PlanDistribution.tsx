import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#f97316", "#22c55e", "#8b5cf6"];

const planData = [
  { name: "Protein Plan", value: 2 },
  { name: "Diet Plan", value: 1 },
  { name: "Royal Plan", value: 1 },
];

export function PlanDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>👨‍🍳 Plan Distribution</CardTitle>
        <p className="text-sm text-muted-foreground">
          Breakdown of active subscription plans
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={planData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={60}
              label
            >
              {planData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
