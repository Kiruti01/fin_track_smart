"use client";
import { useEffect } from "react";

export const currencyFormatter = (amount) => {
  useEffect(() => {
    const height = window.innerHeight;
  }, []);
  const formatter = Intl.NumberFormat("en-US", {
    currency: "KES",
    style: "currency",
  });

  return formatter.format(amount);
};
