import { Divider } from "@chakra-ui/react";

import { Certificates } from "@/components/pages/experience/Certificates";
import { Education } from "@/components/pages/experience/Education";
import { Practice } from "@/components/pages/experience/Practice";
import { withLocale } from "@/helpers/withLocale";

const Experience = () => {
  return (
    <>
      <Education />
      <Divider />
      <Certificates />
      <Divider />
      <Practice />
    </>
  );
};

export default withLocale(Experience);
