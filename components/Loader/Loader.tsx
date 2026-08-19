"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import css from "./Loader.module.css";

export default function Loader() {
  const [mounted] = useState(() => typeof window !== "undefined");

  if (!mounted) return null;

  return createPortal(
    <div className={css.loaderWrapper}>
      <span className={css.spinner}></span>
    </div>,
    document.body,
  );
}
