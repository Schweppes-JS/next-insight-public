import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const Contacts = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return <section>{t("CONTACTS")}</section>;
};

export default withLocale(Contacts);
