import * as React from "react";

import { cn } from "@/lib/util";

interface InputProps extends React.ComponentProps<"input"> {
  inputContainerClassName?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

function Input({
  inputContainerClassName,
  className,
  type,
  leadingIcon,
  trailingIcon,
  disabled,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "group relative w-full data-[disabled]:pointer-events-none",
        inputContainerClassName,
      )}
      data-disabled={disabled ? "" : undefined}
      data-slot="input-container"
    >
      {leadingIcon && (
        <span
          data-slot="input-leading-icon"
          className="-translate-y-1/2 absolute top-1/2 left-3 shrink-0 text-muted-foreground [&_svg:not([class*='pointer-events-'])]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
        >
          {leadingIcon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-9 w-full min-w-0 rounded-md bg-gray-50 px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow,border-color] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 group-hover:border-ring/70 md:text-sm",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/50",
          leadingIcon && "pl-10",
          trailingIcon && "pr-10",
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {trailingIcon && (
        <span
          data-slot="input-trailing-icon"
          className="-translate-y-1/2 absolute top-1/2 right-3 shrink-0 text-muted-foreground [&_svg:not([class*='pointer-events-'])]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
        >
          {trailingIcon}
        </span>
      )}
    </div>
  );
}

export { Input };
