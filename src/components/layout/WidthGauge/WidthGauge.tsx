"use client";
import { useContext, useEffect } from "react";

import { useResizeObserver } from "@/helpers/useResizeObserver";

import { GlobalContext } from "../Providers/GlobalContextProvider";

export const WidthGauge = () => {
  const { elementRef, elementWidth } = useResizeObserver<HTMLHRElement>();
  const { setDeviceWidth } = useContext(GlobalContext);

  useEffect(() => {
    if (elementWidth !== null) setDeviceWidth(elementWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementWidth]);

  return <hr ref={elementRef} className="invisible" />;
};
