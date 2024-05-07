"use client";

import { ReactNode, createContext } from "react";

import { LocalePropsType } from "@/types/appTypes";

export const LocaleContext = createContext<LocalePropsType>({ params: { locale: "uk" }, searchParams: {} });

export const LocaleContextProvider = ({ children, params, searchParams }: { children: ReactNode } & LocalePropsType) => (
  <LocaleContext.Provider value={{ params, searchParams }}>{children}</LocaleContext.Provider>
);
