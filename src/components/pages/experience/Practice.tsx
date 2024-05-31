import { useTranslations } from "next-intl";

export const Practice = () => {
  const t = useTranslations("EXPERIENCE.PRACTICE");

  return (
    <section>
      <h2 className="text-3xl">{t("TITLE")}</h2>
      <p>{t("DESCRIPTION")}</p>
    </section>
  );
};
