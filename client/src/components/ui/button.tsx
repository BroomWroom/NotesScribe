import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "craft" | "parchment" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "craft", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer"

    const variants = {
      default:
        "bg-scrapbook-kraft-600 text-white shadow-sm hover:bg-scrapbook-kraft-700 focus-visible:ring-scrapbook-kraft-500",
      craft:
        "bg-[#986745] hover:bg-[#835637] text-white shadow-md shadow-[#986745]/20 border border-[#7b5037]/40",
      parchment:
        "bg-[#f6eee0] dark:bg-[#2c221b] text-[#433123] dark:text-[#ede4d8] border border-[#d9c7b2] dark:border-[#523e31] hover:bg-[#ede1ce] shadow-xs",
      outline:
        "border-2 border-[#d9c7b2] dark:border-[#4d3a2f] bg-transparent text-[#5c4636] dark:text-[#d6c5b6] hover:bg-[#f6ede1] dark:hover:bg-[#2a201a]",
      ghost:
        "hover:bg-[#ede3d3]/60 dark:hover:bg-[#2d221b] text-[#5c4636] dark:text-[#d6c5b6]",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-12 rounded-xl px-6 text-base",
      icon: "h-9 w-9 p-0",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
