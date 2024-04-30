import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { ReactElement } from "react";

import { AppLocaleType } from "./appTypes";

export type LinkPropsType = Omit<
  ReturnType<typeof createSharedPathnamesNavigation>["Link"] extends (props: infer P) => ReactElement ? P : never,
  "locale"
> & { locale?: AppLocaleType };
