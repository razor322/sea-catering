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
        <div className="space-y-4">
          {data.map((sub: any) => (
            <Card key={sub.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{sub.plan}</CardTitle>
              </CardHeader>
              <CardContent>
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
                <p>
                  <strong>Status:</strong> {sub.status}
                </p>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    disabled={loadingId === sub.id || sub.status !== "ACTIVE"}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
