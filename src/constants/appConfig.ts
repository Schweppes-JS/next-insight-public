import type { LocalePrefix } from "../../node_modules/next-intl/dist/types/src/shared/types.d.ts";

export const defaultDisplayBreakpointState = { is2XL: false, isXL: false, isLG: false, isMD: false, isSM: false, isXS: false };

export const displayBreakpoint = { "2XL": 1536, XL: 1280, LG: 1024, MD: 768, SM: 640 };

export const localePrefix: LocalePrefix = "always";

export const locales = ["uk", "en"] as const;

export const defaultLocale = "uk";
