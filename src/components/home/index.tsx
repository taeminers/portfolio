"use client";

import { useEffect, useState } from "react";
import { Story } from "./Story";
import { PreLoader } from "./PreLoader";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return <Story />;
};
