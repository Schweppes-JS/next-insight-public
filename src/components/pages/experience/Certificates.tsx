import { useTranslations } from "next-intl";

export const Certificates = () => {
  const t = useTranslations("EXPERIENCE.CERTIFICATES");

  return (
    <section>
      <h2 className="text-3xl">{t("TITLE")}</h2>
    </section>
  );
};
