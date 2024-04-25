import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const NotFound = () => {
  const t = useTranslations("NOT_FOUND");

  return (
    <section>
      <h2>{t("TITLE")}</h2>
    </section>
  );
};

export default withLocale(NotFound);
