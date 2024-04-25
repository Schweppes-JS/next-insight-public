import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

export const SubMenu = () => {
  const t = useTranslations("LAYOUT.FOOTER");

  return (
    <section className="self-center ml-auto">
      <nav>
        <ul className="flex flex-col">
          <li className="flex">
            <Link className="text-xs" href="/terms">
              {t("TERMS")}
            </Link>
          </li>
          <li className="flex">
            <Link className="text-xs" href="/policy">
              {t("POLICY")}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
