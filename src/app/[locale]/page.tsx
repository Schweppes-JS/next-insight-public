import { useTranslations } from "next-intl";

import { PersonalInfo } from "@/components/pages/home/PersonalInfo";
import { withLocale } from "@/helpers/withLocale";

const Home = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <>
      <PersonalInfo />
    </>
  );
};

export default withLocale(Home);
