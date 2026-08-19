"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Loader from "@/components/Loader/Loader";

export default function RootPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      router.push("/medicine");
    } else {
      router.push("/login");
    }
  }, [user, router]);

  return <Loader />;
}
