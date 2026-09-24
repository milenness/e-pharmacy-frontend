"use client";

import { useLoaderStore } from "@/store/loaderStore";
import Loader from "@/components/Loader";

export default function GlobalLoader() {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return <>{isLoading && <Loader />}</>;
}
