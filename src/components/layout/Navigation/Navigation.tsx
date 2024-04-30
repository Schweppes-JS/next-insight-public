import { useTranslations } from "next-intl";
import cn from "classnames";

import { LayoutPlace } from "@/types/appTypes";

import { NavLink } from "./NavLink";

type NavigationPropsType = { orientation?: LayoutPlace };

export const Navigation = ({ orientation = "header" }: NavigationPropsType) => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <section className={cn("self-center hidden", { ["md:block"]: orientation === "header", ["sm:block"]: orientation === "footer" })}>
      <nav>
        <ul
          className={cn("text-sm gap-4", {
            ["grid grid-cols-[repeat(2,_minmax(0,_min-content))] md:grid-cols-2"]: orientation === "footer",
            ["flex"]: orientation === "header",
          })}
        >
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/">
              {t("HOME")}
            </NavLink>
          </li>
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/experience">
              {t("EXPERIENCE")}
            </NavLink>
          </li>
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/price">
              {t("EXPERIENCE")}
            </NavLink>
          </li>
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/study">
              {t("STUDY")}
            </NavLink>
          </li>
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/blog">
              {t("BLOG")}
            </NavLink>
          </li>
          <li className={cn({ ["w-max"]: orientation === "header" })}>
            <NavLink className={cn("text-center", { ["inline-block md:inline"]: orientation === "footer" })} href="/contacts">
              {t("CONTACTS")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
