import createMiddleware from "next-intl/middleware";

import { locales, defaultLocale, localePrefix } from "@/constants/appConfig";

export default createMiddleware({ locales, defaultLocale, localePrefix });

export const config = { matcher: ["/", "/(uk|en)/:path*"] };
