"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ForwardedRef, forwardRef } from "react";
import cn from "classnames";

import { LinkPropsType } from "@/types/libraryTypes";
import { Link } from "@/navigation";

export const NavLink = forwardRef(({ href, children, className, ...rest }: LinkPropsType, ref: ForwardedRef<HTMLAnchorElement>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={cn(
        "w-full focus:!underline hover:underline underline-offset-4 decoration-cyan-900",
        {
          ["!underline !decoration-red-400"]: `/${selectedLayoutSegment ?? ""}` === href,
        },
        className
      )}
      href={href}
      {...rest}
      ref={ref}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";
