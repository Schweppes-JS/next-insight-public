"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { DeviceWidthProvider } from "@/store/deviceWidthContext";

export const Providers = ({ children }: { children: ReactNode }) => (
  <DeviceWidthProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </DeviceWidthProvider>
);
