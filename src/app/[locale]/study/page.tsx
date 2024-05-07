import { Divider } from "@chakra-ui/react";

import { EnterpriseDescription } from "@/components/pages/study/EnterpriseDescription";
import { FacebookOfEnterprise } from "@/components/pages/study/FacebookOfEnterprise";
import { withLocale } from "@/helpers/withLocale";

const Study = withLocale((props) => (
  <>
    <EnterpriseDescription {...props} />
    <Divider />
    <FacebookOfEnterprise />
  </>
));

export default Study;
