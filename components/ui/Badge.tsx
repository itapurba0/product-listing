import { classNames } from "@/lib/utils";
import type { StockStatus } from "@/data/products";

interface BadgeProps {
  status: StockStatus;
  className?: string;
}

const statusStyles: Record<StockStatus, string> = {
  "In Stock": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Low Stock": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  "Out of Stock": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
