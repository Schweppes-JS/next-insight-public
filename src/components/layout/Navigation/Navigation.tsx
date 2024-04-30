import { useTranslations } from "next-intl";
import cn from "classnames";

import { LayoutPlace } from "@/types/appTypes";

import { NavLink } from "./NavLink";

type NavigationPropsType = { orientation?: LayoutPlace };

export const Navigation = ({ orientation = "header" }: NavigationPropsType) => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <section className={cn("self-center", { ["hidden md:block"]: orientation === "header" })}>
      <nav>
        <ul className={cn("text-sm gap-4", { ["grid grid-cols-2"]: orientation === "footer", ["flex"]: orientation === "header" })}>
          <li className="w-max">
            <NavLink href="/">{t("HOME")}</NavLink>
          </li>
          <li className="w-max">
            <NavLink href="/experience">{t("EXPERIENCE")}</NavLink>
          </li>
          <li className="w-max">
            <NavLink href="/price">{t("EXPERIENCE")}</NavLink>
          </li>
          <li className="w-max">
            <NavLink href="/study">{t("STUDY")}</NavLink>
          </li>
          <li className="w-max">
            <NavLink href="/blog">{t("BLOG")}</NavLink>
          </li>
          <li className="w-max">
            <NavLink href="/contacts">{t("CONTACTS")}</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
