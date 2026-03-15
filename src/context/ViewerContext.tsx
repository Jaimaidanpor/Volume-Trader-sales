"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ViewerContext = createContext(12);

export function ViewerProvider({ children }: { children: ReactNode }) {
  const [viewers, setViewers] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() < 0.5 ? 1 : -1;
        return Math.min(Math.max(prev + change, 8), 18);
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return <ViewerContext.Provider value={viewers}>{children}</ViewerContext.Provider>;
}

export const useViewers = () => useContext(ViewerContext);
