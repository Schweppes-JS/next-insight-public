"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import cn from "classnames";

import { LayoutPlace, ParamsPropsType } from "@/types/appTypes";
import { Link } from "@/navigation";

type LanguageSwitcherPropsType = ParamsPropsType & { orientation?: LayoutPlace; className?: string; withHoverEffect?: boolean };

export const LanguageSwitcher = ({ params, orientation = "header", className, withHoverEffect }: LanguageSwitcherPropsType) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <section className={cn("self-center flex gap-4", { ["flex-col"]: orientation === "footer" }, className)}>
      <Link
        className={cn("w-full text-center underline-offset-4 ", {
          ["underline !decoration-red-400"]: params.locale === "en",
          ["hover:underline decoration-cyan-900"]: withHoverEffect,
        })}
        href={`/${selectedLayoutSegment ?? "/"}`}
        locale="en"
      >
        EN
      </Link>
      <Link
        className={cn("w-full text-center underline-offset-4", {
          ["underline !decoration-red-400"]: params.locale === "uk",
          ["hover:underline decoration-cyan-900"]: withHoverEffect,
        })}
        href={`/${selectedLayoutSegment ?? "/"}`}
        locale="uk"
      >
        UA
      </Link>
    </section>
  );
};
