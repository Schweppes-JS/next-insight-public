import { useTranslations } from "next-intl";
import cn from "classnames";

import { LayoutPlace } from "@/types/appTypes";

import { NavLink } from "./NavLink";

type NavigationPropsType = { destination?: LayoutPlace };

export const Navigation = ({ destination = "header" }: NavigationPropsType) => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <section className="self-center">
      <nav>
        <ul className={cn("text-sm gap-4", { ["grid grid-cols-2"]: destination === "footer", ["flex"]: destination === "header" })}>
          <li>
            <NavLink href="/" title={t("HOME")} />
          </li>
          <li>
            <NavLink href="/experience" title={t("EXPERIENCE")} />
          </li>
          <li>
            <NavLink href="/price" title={t("PRICE")} />
          </li>
          <li>
            <NavLink href="/study" title={t("STUDY")} />
          </li>
          <li>
            <NavLink href="/blog" title={t("BLOG")} />
          </li>
          <li>
            <NavLink href="/contacts" title={t("CONTACTS")} />
          </li>
        </ul>
      </nav>
    </section>
  );
};
