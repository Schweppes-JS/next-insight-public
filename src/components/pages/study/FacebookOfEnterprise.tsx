"use client";

import { Spinner } from "@chakra-ui/react";
import { memo, useContext } from "react";

import { facebookInsightSMIframe, facebookInsightXSIframe, facebookSMIframeWidth, facebookXSIframeWidth } from "@/constants/enterpriseInfo";
import { GlobalContext } from "@/components/layout/Providers/GlobalContextProvider";

export const FacebookOfEnterprise = () => {
  const { deviceWidth } = useContext(GlobalContext);

  return deviceWidth ? (
    <MemorizedFacebookIframe isXS={deviceWidth.isXS} />
  ) : (
    <section className="min-h-96 flex justify-center items-center">
      <Spinner thickness="4px" speed="0.65s" color="red.400" size="xl" />
    </section>
  );
};

const MemorizedFacebookIframe = memo(function FacebookIframe({ isXS }: { isXS: boolean }) {
  return (
    <iframe
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      src={isXS ? facebookInsightXSIframe : facebookInsightSMIframe}
      width={isXS ? facebookXSIframeWidth : facebookSMIframeWidth}
      className="self-center"
      allowFullScreen
      height="1000"
    />
  );
});
