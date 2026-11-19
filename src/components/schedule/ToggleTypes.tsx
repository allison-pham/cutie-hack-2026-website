"use client";

import { EventTypes, LABELS } from "@/src/types/schedule";

export type ToggleLabel = {
  background: string;
  border: string;
  text: string;
};

type Props<T extends string = EventTypes> = {
  activeTypes: Set<T>;
  onToggle: (type: T) => void;
  labels?: Record<T, ToggleLabel>;
  display?: Partial<Record<T, string>>;
  className?: string;
};

const defaultClassName =
  "flex w-full min-w-0 gap-2 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-between lg:gap-0 lg:overflow-visible lg:px-0";

function ToggleTypes<T extends string = EventTypes>({
  activeTypes,
  onToggle,
  labels,
  display,
  className = defaultClassName,
}: Props<T>) {
  const resolved = (labels ?? LABELS) as Record<string, ToggleLabel>;
  const types = Object.keys(resolved) as T[];

  return (
    <div className={className}>
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onToggle(type)}
          className={`shrink-0 whitespace-nowrap rounded-lg px-[max(12px,1.5vw)] py-0.5 shadow-md font-fraunces text-xl border-2 ${
            activeTypes.has(type)
              ? `${resolved[type].background} border-white text-white`
              : `bg-white-100 ${resolved[type].border} ${resolved[type].text}`
          }`}
        >
          {display?.[type] ?? type}
        </button>
      ))}
    </div>
  );
}

export default ToggleTypes;
