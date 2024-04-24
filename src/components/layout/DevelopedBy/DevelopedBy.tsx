import { useTranslations } from "next-intl";

import { developedByLinkedinLink } from "@/constants/personalInfo";

export const DevelopedBy = () => {
  const t = useTranslations("LAYOUT.FOOTER");

  return (
    <section className="flex">
      <a className="text-xs text-center text-cyan-900" href={developedByLinkedinLink} target="_blank">
        {t("DEVELOPED_BY")}
      </a>
    </section>
  );
};
