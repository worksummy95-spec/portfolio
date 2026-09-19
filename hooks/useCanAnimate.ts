"use client";
import { useEffect, useState } from "react";
export function useCanAnimate() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setOk(true);
  }, []);
  return ok;
}
