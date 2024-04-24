import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Experience = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("EXPERIENCE")}</section>;
};

export default withLocale(Experience);
