import React, { LegacyRef } from "react";

interface TooltipInterface {
  tip: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Tooltip = (
  props: TooltipInterface,
  ref: React.RefObject<HTMLDivElement>
) => {
  const { tip, children, ...rest } = props;
  return (
    <div className="w-full">
      <div
        ref={ref}
        {...rest}
        className="bg-gray-800 opacity-60 text-white font-thin text-xs px-3 py-2 text-center rounded-md absolute"
      >
        {tip}
      </div>
      {children}
    </div>
  );
};
