import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

export const Headline = () => {
  const t = useTranslations("LAYOUT.HEADLINE");

  return (
    <section className="self-center flex flex-col max-w-64">
      <h1 className="text-2xl text-center">
        <Link href="/">{t("OWNER_FULL_NAME")}</Link>
      </h1>
      <p className="text-xs text-center">{t("OWNER_POSITION")}</p>
    </section>
  );
};
