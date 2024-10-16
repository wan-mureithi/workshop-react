import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

function strip(string: string) {
  return string.replace(/^\s+|\s+$/g, "")
}
