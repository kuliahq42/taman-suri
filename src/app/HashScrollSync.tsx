"use client";

import { useEffect } from "react";
import { scrollHashIntoViewOnMount } from "@/lib/utils";

export const HashScrollSync = () => {
  useEffect(() => {
    scrollHashIntoViewOnMount();
  }, []);
  return null;
};
