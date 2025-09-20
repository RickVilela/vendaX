import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { SVGProps, ComponentType } from "react";

type PropsType = {
  label: string;
  data: {
    value: number | string;
    growthRate: number;
  };
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function OverviewCard({ label, data, Icon }: PropsType) {
  const isDecreasing = data.growthRate < 0;

  return (
    <div className="rounded-[14px] bg-white p-6 shadow-md dark:bg-gray-dark flex flex-col gap-4">
      {/* Header com ícone */}
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-xl bg-gray-100 dark:bg-dark-3">
          <Icon className="w-6 h-6 text-indigo-600" /> {/* menor + cor */}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-2xl font-bold text-dark dark:text-white">
            {data.value}
          </dt>
          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>

        <dl
          className={cn(
            "text-sm font-medium flex items-center gap-1.5",
            isDecreasing ? "text-red-500" : "text-green-500",
          )}
        >
          <dt>
            {data.growthRate}%{" "}
            {isDecreasing ? (
              <ArrowDownIcon className="w-4 h-4" aria-hidden />
            ) : (
              <ArrowUpIcon className="w-4 h-4" aria-hidden />
            )}
          </dt>
          <dd className="sr-only">
            {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
            {data.growthRate}%
          </dd>
        </dl>
      </div>
    </div>
  );
}
