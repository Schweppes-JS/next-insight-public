"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "./throttle";

export function useResizeObserver<T extends Element>(delay = 200) {
  const [elementWidth, setElementWidth] = useState<number | null>(null);
  const elementRef = useRef<T>(null);

  const observer = useMemo(() => {
    if (typeof window !== "undefined" && window.ResizeObserver) {
      return new ResizeObserver(
        throttle(([entries]: Array<ResizeObserverEntry>) => {
          setElementWidth(Array.isArray(entries) ? entries[0].contentRect.width : entries.contentRect.width);
        }, delay)
      );
    } else return null;
  }, [delay]);

  useEffect(() => {
    if (elementRef.current) observer?.observe(elementRef.current);
    return () => observer?.disconnect();
  }, [observer]);

  return { elementRef, elementWidth };
}
