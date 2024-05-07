import { useTranslations } from "next-intl";
import Image from "next/image";

import expectationsImage from "@/../public/expectations.svg";
import { LocalePropsType } from "@/types/appTypes";
import { Code } from "@chakra-ui/react";

export const Expectations = (props: LocalePropsType) => {
  const t = useTranslations("HOME.EXPECTATIONS");

  return (
    <section className="flex flex-col">
      <h2 className="text-3xl">{t("TITLE")}</h2>
      <h3 className="text-xl mb-1">{t("SUBTITLE")}</h3>
      <div className="flex bg-stone-50/80 rounded-md shadow-inner">
        <div className="p-2 w-full">
          <Image className="w-6/12 m-auto lg:w-4/12 xl:w-3/12 float-left pr-5" src={expectationsImage} alt={t("EXPECTATIONS_IMAGE_ALT_TEXT")} />
          <ul
            className="list-disc pl-5 mt-1 gap-1"
            dangerouslySetInnerHTML={{
              __html:
                props.params.locale === "en"
                  ? "<li>Meet yourself and the part of reality that you find difficult to deal with alone, and you will have the opportunity to gain a better understanding of yourself and the surrounding world.</li>\n<li>Get closer to a fuller contact with your sensations and feelings, better understanding yourself and others.</li>\n<li>Learn to master your experiences and attribute your own emotions.</li>\n<li>Learn to recognize your needs and develop ways to meet them.</li>\n<li>Become aware of the mechanisms that stimulate the repetition of habitual behavior patterns.</li>\n<li>Acquire the experience of your own strength and the ability to self-support.</li>\n<li>Develop the ability to take responsibility for your thoughts, feelings, words, actions, and your own lifestyle.</li>"
                  : "<li>Зустрінетесь з самим собою і з тою частиною реальності, з якою вам важко мати справу на одинці і матимете можливість до кращого усвідомлення себе та оточуючого світу;</li>\n<li>Наблизитися до більш повного контакту із своїми відчуттями та почуттями, краще розумітимете себе та інших;</li>\n<li>Навчитеся опановувати свій досвід та присвоювати собі власні переживання;</li>\n<li>Навчитеся усвідомлювати свої потреби і розвивати способи їх задоволення;</li>\n<li>Усвідомите механізми, які стимулюють на повторення привичних паттернів поведінки;</li>\n<li>Присвоєте досвід власної сили та можливості до самопідтримки;</li>\n<li>Розвинете здатність приймати відповідальність за свої думки, переживання, слова, дії та за власний стиль життя.</li>",
            }}
          />
        </div>
      </div>
      <Code className="max-w-screen-md xl:max-w-screen-lg mx-auto sm:!text-lg lg:!text-xl !rounded m-4 !shadow-sm !p-2 " variant={"subtle"}>
        {t("QUOTE")}
      </Code>
    </section>
  );
};
