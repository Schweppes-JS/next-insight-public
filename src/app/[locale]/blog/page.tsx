import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Blog = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("BLOG")}</section>;
};

export default withLocale(Blog);
