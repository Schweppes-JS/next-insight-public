import { useTranslations } from "next-intl";

export const Education = () => {
  const t = useTranslations("EXPERIENCE.EDUCATION");

  return (
    <section>
      <h2 className="text-3xl">{t("TITLE")}</h2>
      <p>{t("DESCRIPTION")}</p>
    </section>
  );
};
