"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import cn from "classnames";

import { LinkPropsType } from "@/types/libraryTypes";
import { Link } from "@/navigation";

export const NavLink = ({ href, children, className, ...rest }: LinkPropsType) => {
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
    >
      {children}
    </Link>
  );
};
