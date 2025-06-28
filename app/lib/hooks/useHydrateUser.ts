import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import axios from "axios";

export function useHydrateUser() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    // Jika user belum ada, ambil dari server
    if (!user) {
      axios
        .get("/api/profile")
        .then((res) => setUser(res.data))
        .catch(() => {
          console.error("Gagal memuat user");
        });
    }
  }, [user, setUser]);
}
