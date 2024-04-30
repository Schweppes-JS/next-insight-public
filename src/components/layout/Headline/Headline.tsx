import { useTranslations } from "next-intl";
import cn from "classnames";

import { LayoutPlace } from "@/types/appTypes";
import { Link } from "@/navigation";

type HeadlinePropsType = { orientation?: LayoutPlace };

export const Headline = ({ orientation = "header" }: HeadlinePropsType) => {
  const t = useTranslations("LAYOUT.HEADLINE");

  return (
    <section className={cn("self-center flex flex-col max-w-64", { ["hidden sm:flex"]: orientation === "footer" })}>
      <h1 className={cn("text-xl md:text-2xl md:text-center", { ["text-center"]: orientation === "footer" })}>
        <Link href="/">{t("OWNER_FULL_NAME")}</Link>
      </h1>
      <p className={cn("text-xs md:text-center", { ["text-center"]: orientation === "footer" })}>{t("OWNER_POSITION")}</p>
    </section>
  );
};
