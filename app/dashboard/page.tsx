/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function UserDashboard() {
  const { data, isLoading, mutate, error } = useSWR(
    "/api/subscription",
    fetcher
  );
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return {
          label: "Aktif",
          color: "bg-green-100 text-green-800",
          dot: "bg-green-500",
        };
      case "PAUSED":
        return {
          label: "Dijeda",
          color: "bg-yellow-100 text-yellow-800",
          dot: "bg-yellow-500",
        };
      case "CANCELLED":
        return {
          label: "Dibatalkan",
          color: "bg-red-100 text-red-800",
          dot: "bg-red-500",
        };
      default:
        return {
          label: "Tidak Diketahui",
          color: "bg-gray-100 text-gray-800",
          dot: "bg-gray-500",
        };
    }
  };

  const handlePause = async (id: string) => {
    setLoadingId(id);
    try {
      await axios.put("/api/subscription/pause", { id });
      mutate();
      toast.success("Berlangganan dijeda");
    } catch {
      toast.error("Gagal menjeda langganan");
    } finally {
      setLoadingId(null);
    }
  };
  const handleUnPause = async (id: string) => {
    setLoadingId(id);
    try {
      await axios.put("/api/subscription/unpause", { id });
      mutate();
      toast.success("Berlangganan diakifkan");
    } catch {
      toast.error("Gagal mengaktifkan langganan");
    } finally {
      setLoadingId(null);
    }
  };

  const handleCancel = async (id: string) => {
    setLoadingId(id);
    try {
      await axios.delete("/api/subscription/cancel", { data: { id } });
      mutate();
      toast.success("Berlangganan dibatalkan");
    } catch {
      toast.error("Gagal membatalkan langganan");
    } finally {
      setLoadingId(null);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin w-6 h-6 text-gray-600" />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        <AlertCircle className="w-6 h-6 mx-auto mb-2" />
        Gagal memuat data langganan
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Langganan Aktif</h1>
      {data?.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <AlertCircle className="w-8 h-8 mx-auto mb-2" />
          Kamu belum memiliki langganan
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((sub: any) => {
            const status = getStatusStyles(sub.status);
            return (
              <Card key={sub.id} className="shadow-md relative">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${status.color}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${status.dot}`} />
                    {status.label}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {sub.plan}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Jenis Makanan:</strong> {sub.meals.join(", ")}
                  </p>
                  <p>
                    <strong>Alergi:</strong> {sub.allergies || "Tidak ada"}
                  </p>
                  <p>
                    <strong>Hari Pengiriman:</strong> {sub.days.join(", ")}
                  </p>
                  <p>
                    <strong>Total Harga:</strong> Rp
                    {sub.total.toLocaleString("id-ID")}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    {sub.status === "ACTIVE" && (
                      <>
                        <Button
                          variant="outline"
                          disabled={loadingId === sub.id}
                          onClick={() => handlePause(sub.id)}
                        >
                          {loadingId === sub.id ? "Menjeda..." : "Jeda"}
                        </Button>
                        <Button
                          variant="destructive"
                          disabled={loadingId === sub.id}
                          onClick={() => handleCancel(sub.id)}
                        >
                          {loadingId === sub.id ? "Membatalkan..." : "Batalkan"}
                        </Button>
                      </>
                    )}

                    {sub.status === "PAUSED" && (
                      <Button
                        variant="outline"
                        disabled={loadingId === sub.id}
                        onClick={() => handleUnPause(sub.id)}
                      >
                        {loadingId === sub.id ? "Mengaktifkan..." : "Aktifkan"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
