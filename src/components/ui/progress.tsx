import { Progress as ProgressPrimitive } from "radix-ui";
import type React from "react";

import { cn } from "@/lib/utils";

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  orientation?: "horizontal" | "vertical";
};

function Progress({ className, value, orientation = "horizontal", ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative overflow-hidden rounded-full bg-primary/20",
        orientation === "vertical" ? "h-full w-2" : "h-2 w-full",
        className,
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary transition-all",
          orientation === "vertical" ? "h-full w-full" : "h-full w-full flex-1",
        )}
        style={
          orientation === "vertical"
            ? { transform: `translateY(-${100 - (value || 0)}%)` }
            : { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
