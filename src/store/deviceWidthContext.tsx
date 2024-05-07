"use client";

import { ReactNode, createContext, memo, useCallback, useState } from "react";

import { defaultDisplayBreakpointState, displayBreakpoint } from "@/constants/appConfig";

type DeviceWidthContextType = {
  deviceWidth: { is2XL: boolean; isXL: boolean; isLG: boolean; isMD: boolean; isSM: boolean; isXS: boolean } | null;
  setDeviceWidth: (width: number) => void;
};

export const DeviceWidthContext = createContext<DeviceWidthContextType>({ deviceWidth: null, setDeviceWidth: () => {} });

export const DeviceWidthProvider = memo(({ children }: { children: ReactNode }) => {
  const [deviceWidth, setDeviceWidth] = useState<null | DeviceWidthContextType["deviceWidth"]>(null);

  const handleDeviceWidth = useCallback(
    (width: number) =>
      setDeviceWidth((prevState): DeviceWidthContextType["deviceWidth"] => {
        if (width >= displayBreakpoint["2XL"])
          if (prevState?.is2XL) return prevState;
          else return { ...defaultDisplayBreakpointState, is2XL: true };
        else if (width >= displayBreakpoint["XL"] && width < displayBreakpoint["2XL"])
          if (prevState?.isXL) return prevState;
          else return { ...defaultDisplayBreakpointState, isXL: true };
        else if (width >= displayBreakpoint["LG"] && width < displayBreakpoint["XL"])
          if (prevState?.isLG) return prevState;
          else return { ...defaultDisplayBreakpointState, isLG: true };
        else if (width >= displayBreakpoint["MD"] && width < displayBreakpoint["LG"])
          if (prevState?.isMD) return prevState;
          else return { ...defaultDisplayBreakpointState, isMD: true };
        else if (width >= displayBreakpoint["SM"] && width < displayBreakpoint["MD"])
          if (prevState?.isSM) return prevState;
          else return { ...defaultDisplayBreakpointState, isSM: true };
        else {
          if (prevState?.isXS) return prevState;
          else return { ...defaultDisplayBreakpointState, isXS: true };
        }
      }),
    []
  );

  return <DeviceWidthContext.Provider value={{ deviceWidth, setDeviceWidth: handleDeviceWidth }}>{children}</DeviceWidthContext.Provider>;
});
DeviceWidthProvider.displayName = "DeviceWidthProvider";
