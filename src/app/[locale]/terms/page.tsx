import { useTranslations } from "next-intl";

import { withLocale } from "@/helpers/withLocale";

const TermsOfUse = () => {
  const t = useTranslations("TERMS_OF_USE");

  return <section dangerouslySetInnerHTML={{ __html: t("CONTENT") }} />;
};

export default withLocale(TermsOfUse);
