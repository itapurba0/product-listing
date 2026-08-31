import { type ReactNode } from "react";
import { classNames } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
        hover && "transition-shadow hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-brand-amber/5",
        className
      )}
    >
      {children}
    </div>
  );
}
