import { EnterpriseDescription } from "@/components/pages/study/EnterpriseDescription";
import { FacebookOfEnterprise } from "@/components/pages/study/FacebookOfEnterprise";
import { LocalePropsType } from "@/types/appTypes";
import { withLocale } from "@/helpers/withLocale";

const Study = (props: LocalePropsType) => (
  <>
    <EnterpriseDescription {...props} />
    <FacebookOfEnterprise />
  </>
);

export default withLocale(Study);
