import { useTranslations } from "next-intl";
import Image from "next/image";

import ownerImage from "@/../public/owner.jpg";

export const PersonalInfo = () => {
  const t = useTranslations("HOME.PERSONAL_INFO");

  return (
    <>
      <section className="flex gap-8 justify-center lg:max-w-screen-lg max-w-screen-md self-center">
        <Image
          className="rounded-md shadow-lg flex-1"
          alt={t("OWNER_IMAGE_ALT_TEXT")}
          placeholder="blur"
          src={ownerImage}
          quality={100}
          sizes="100vw"
          priority
        />
        <div className="flex flex-col flex-1 mt-8">
          <h2 className="text-3xl	">{t("FULL_NAME")}</h2>
          <p>{t("POSITION")}</p>
        </div>
      </section>
      <p className="lg:max-w-screen-xl max-w-screen-md self-center">{t("EPIGRAPH")}</p>
    </>
  );
};
