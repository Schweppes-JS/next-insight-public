import { Divider } from "@chakra-ui/react";

import { PersonalInfo } from "@/components/pages/home/PersonalInfo";
import { Expectations } from "@/components/pages/home/Expectations";
import { Enquiries } from "@/components/pages/home/Enquiries";
import { withLocale } from "@/helpers/withLocale";
import { FAQ } from "@/components/pages/home/FAQ";

const Home = withLocale((props) => {
  return (
    <>
      <PersonalInfo />
      <Divider />
      <Enquiries {...props} />
      <Divider />
      <Expectations {...props} />
      <Divider />
      <FAQ />
    </>
  );
});

export default Home;
