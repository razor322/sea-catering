import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserPlus, DollarSign, RotateCw, BarChart3 } from "lucide-react";

interface MetricsCardsProps {
  metrics: {
    newSubscriptions: number;
    mrr: number;
    reactivations: number;
    activeSubscriptions: number;
  };
}

export default function MetricsCards({ metrics }: MetricsCardsProps) {
  const items = [
    {
      label: "New Subscriptions",
      value: metrics.newSubscriptions,
      icon: <UserPlus className="w-5 h-5 text-green-600" />,
      color: "bg-green-100 text-green-700",
      textColor: "text-green-700",
    },
    {
      label: "Monthly Recurring Revenue (MRR)",
      value: `Rp${metrics.mrr.toLocaleString("id-ID")}`,
      icon: <DollarSign className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-100 text-blue-700",
      textColor: "text-blue-700",
    },
    {
      label: "Reactivations",
      value: metrics.reactivations,
      icon: <RotateCw className="w-5 h-5 text-yellow-600" />,
      color: "bg-yellow-100 text-yellow-700",
      textColor: "text-yellow-700",
    },
    {
      label: "Active Subscriptions",
      value: metrics.activeSubscriptions,
      icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-100 text-purple-700",
      textColor: "text-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-500">
                {item.label}
              </CardTitle>
              <div className={`rounded-full p-1.5 ${item.color}`}>
                {item.icon}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className={cn("text-2xl font-bold " + item.textColor)}>
              {item.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
