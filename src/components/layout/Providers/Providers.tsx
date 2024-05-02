"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { GlobalContextProvider } from "./GlobalContextProvider";

export const Providers = ({ children }: { children: ReactNode }) => (
  <GlobalContextProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </GlobalContextProvider>
);
