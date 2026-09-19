import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "stamp" | "kraft" | "parchment" | "sage" | "terracotta" | "blueprint"
}

export function Badge({
  className,
  variant = "stamp",
  ...props
}: BadgeProps) {
  const variants = {
    stamp:
      "font-mono uppercase tracking-wider text-[10px] border border-current px-2 py-0.5 rounded-sm bg-black/5 dark:bg-white/5",
    kraft:
      "bg-[#ecd8c4] text-[#63422a] border border-[#d6ba9f] dark:bg-[#3d2c20] dark:text-[#dfc3a7] dark:border-[#5a4232]",
    parchment:
      "bg-[#f6ebd5] text-[#5e4b30] border border-[#ddc9a6] dark:bg-[#33271c] dark:text-[#ebd8b7] dark:border-[#52402e]",
    sage:
      "bg-[#dbe7dc] text-[#335337] border border-[#bccfbe] dark:bg-[#203123] dark:text-[#cbe0cd] dark:border-[#38553e]",
    terracotta:
      "bg-[#f3dad2] text-[#6b3b2d] border border-[#dfb6aa] dark:bg-[#38211b] dark:text-[#eecac0] dark:border-[#59362c]",
    blueprint:
      "bg-[#d5e6ed] text-[#2d4b58] border border-[#b3d0dc] dark:bg-[#1a2d36] dark:text-[#c4dde7] dark:border-[#2f5160]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center text-[10px] font-semibold tracking-wide transition-colors focus:outline-none rounded-md px-2 py-0.5",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
