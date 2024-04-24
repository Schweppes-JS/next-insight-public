import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

import { AppLocaleType } from "./types/appTypes";
import { locales } from "./constants/appConfig";

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName as AppLocaleType;
  if (!locales.includes(baseLocale)) notFound();
  return { messages: (await import(`./messages/${baseLocale}.json`)).default };
});
