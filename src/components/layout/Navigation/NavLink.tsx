"use client";

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactElement } from "react";
import cn from "classnames";

import { Link } from "@/navigation";

type LinkPropsType = ReturnType<typeof createSharedPathnamesNavigation>["Link"] extends (props: infer P) => ReactElement ? P : never;

type NavLinkPropsType = LinkPropsType & { title: string };

export const NavLink = ({ title, href }: NavLinkPropsType) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={cn("hover:underline underline-offset-4 decoration-cyan-900", {
        ["underline !decoration-red-400"]: `/${selectedLayoutSegment ?? ""}` === href,
      })}
      href={href}
    >
      {title}
    </Link>
  );
};
