import { unstable_setRequestLocale } from "next-intl/server";
import { ComponentType, FC } from "react";

import { LocalePropsType } from "@/types/appTypes";

export const withLocale = (Component: ComponentType<LocalePropsType>) => {
  const WithLocaleComponent: FC<LocalePropsType> = (props) => {
    unstable_setRequestLocale(props.params.locale);
    return <Component {...props} />;
  };
  WithLocaleComponent.displayName = Component.displayName || Component.name || "Component";
  return WithLocaleComponent;
};
