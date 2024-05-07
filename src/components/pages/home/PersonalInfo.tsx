import { useTranslations } from "next-intl";
import { Card } from "@chakra-ui/react";
import Image from "next/image";

import ownerImage from "@/../public/owner.jpg";

export const PersonalInfo = () => {
  const t = useTranslations("HOME.PERSONAL_INFO");

  return (
    <>
      <section className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center lg:max-w-screen-lg max-w-screen-md self-center">
        <Image
          className="max-w-md md:max-w-full rounded-md shadow-lg flex-1 mx-auto"
          alt={t("OWNER_IMAGE_ALT_TEXT")}
          placeholder="blur"
          src={ownerImage}
          quality={100}
          sizes="100vw"
          priority
        />
        <div className="sticky top-0 md:pt-16 lg:pt-20 mb-auto flex-1">
          <Card className="!bg-stone-50/80">
            <h2 className="p-2 md:p-4 text-2xl md:text-3xl font-bold">{t("FULL_NAME")}</h2>
            <p className="p-2 md:p-4">{t("POSITION")}</p>
          </Card>
        </div>
      </section>
      <p className="[text-shadow:2px_8px_6px_rgba(0,0,0,0.1),_0px_-5px_35px_rgba(255,255,255,0.3)] lg:max-w-screen-xl max-w-screen-md self-center md:text-lg">
        {t("EPIGRAPH")}
      </p>
    </>
  );
};
