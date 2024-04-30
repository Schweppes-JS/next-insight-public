import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

export const SubMenu = () => {
  const t = useTranslations("LAYOUT.FOOTER");

  return (
    <section className="self-center sm:ml-auto">
      <nav>
        <ul className="flex flex-col">
          <li className="flex justify-center sm:justify-start">
            <Link className="text-xs text-center" href="/terms">
              {t("TERMS")}
            </Link>
          </li>
          <li className="flex justify-center sm:justify-start">
            <Link className="text-xs text-center" href="/policy">
              {t("POLICY")}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
