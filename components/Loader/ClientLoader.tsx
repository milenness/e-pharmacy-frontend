"use client";

import dynamic from "next/dynamic";

const LoaderWithoutSSR = dynamic(() => import("./Loader"), {
  ssr: false,
});

export default function ClientLoader() {
  return <LoaderWithoutSSR />;
}
