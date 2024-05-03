import { unstable_setRequestLocale } from "next-intl/server";
import { ComponentType, FC } from "react";

import { LocaleContextProvider } from "@/store/localeContext";
import { LocalePropsType } from "@/types/appTypes";

export const withLocale = (Component: ComponentType<LocalePropsType>) => {
  const WithLocaleComponent: FC<LocalePropsType> = (props) => {
    unstable_setRequestLocale(props.params.locale);

    return (
      <LocaleContextProvider params={props.params} searchParams={props.searchParams}>
        <Component {...props} />
      </LocaleContextProvider>
    );
  };
  WithLocaleComponent.displayName = Component.displayName || Component.name || "Component";

  return WithLocaleComponent;
};
