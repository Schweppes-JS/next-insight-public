import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Study = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("STUDY")}</section>;
};

export default withLocale(Study);
