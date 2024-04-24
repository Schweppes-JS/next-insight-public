import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Home = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("HOME")}</section>;
};

export default withLocale(Home);
