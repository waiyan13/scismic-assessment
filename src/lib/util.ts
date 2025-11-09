import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { NestedKeys } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterCandidates<T extends object>(
  candidates: T[],
  field: NestedKeys<T>,
) {
  const keys = field.split(".");

  const result: Record<string, T[]> = {};

  for (const candidate of candidates) {
    let current: any = candidate;
    for (const key of keys) {
      if (current == null) {
        break;
      }
      current = current[key];
    }
    if (typeof current === "string") {
      (result[current] ||= []).push(candidate);
    }
  }

  return result;
}
