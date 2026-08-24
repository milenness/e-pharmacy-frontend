"use client";

import { useState, useEffect } from "react";

export function useReviewsLimit() {
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1440) {
        setLimit(3);
      } else if (width >= 768) {
        setLimit(2);
      } else {
        setLimit(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return limit;
}
