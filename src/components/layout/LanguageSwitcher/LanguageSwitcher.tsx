"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import cn from "classnames";

import { LayoutPlace, ParamsPropsType } from "@/types/appTypes";
import { Link } from "@/navigation";

type LanguageSwitcherPropsType = ParamsPropsType & { destination?: LayoutPlace };

export const LanguageSwitcher = ({ params, destination = "header" }: LanguageSwitcherPropsType) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  return (
    <section className={cn("self-center flex gap-4", { ["flex-col"]: destination === "footer" })}>
      <Link
        className={cn({ ["underline underline-offset-4 decoration-red-400"]: params.locale === "en" })}
        href={`/${selectedLayoutSegment ?? "/"}`}
        locale="en"
      >
        EN
      </Link>
      <Link
        className={cn({ ["underline underline-offset-4 decoration-red-400"]: params.locale === "uk" })}
        href={`/${selectedLayoutSegment ?? "/"}`}
        locale="uk"
      >
        UA
      </Link>
    </section>
  );
};
