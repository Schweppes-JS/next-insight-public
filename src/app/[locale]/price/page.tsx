import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Price = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("PRICE")}</section>;
};

export default withLocale(Price);
