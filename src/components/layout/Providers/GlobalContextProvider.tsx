import { ReactNode, createContext, useState } from "react";

import { defaultDisplayBreakpointState, displayBreakpoint } from "@/constants/appConfig";
import { GlobalContextType } from "@/types/appTypes";

export const GlobalContext = createContext<GlobalContextType>({ deviceWidth: null, setDeviceWidth: () => {} });

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [deviceWidth, setDeviceWidth] = useState<null | GlobalContextType["deviceWidth"]>(null);

  const handleDeviceWidth = (width: number) =>
    setDeviceWidth((prevState): GlobalContextType["deviceWidth"] => {
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
    });

  return <GlobalContext.Provider value={{ deviceWidth, setDeviceWidth: handleDeviceWidth }}>{children}</GlobalContext.Provider>;
};
