import { useTranslations } from "next-intl";
import Image from "next/image";

import enquiriesImage from "@/../public/enquiries.svg";
import { LocalePropsType } from "@/types/appTypes";

export const Enquiries = (props: LocalePropsType) => {
  const t = useTranslations("HOME.ENQUIRIES");

  return (
    <section>
      <h2 className="text-3xl">{t("TITLE")}</h2>
      <h3 className="text-xl mb-1">{t("SUBTITLE")}</h3>
      <div className="flex bg-indigo-50 rounded-md shadow-inner">
        <div className="p-2 w-full">
          <Image className="w-6/12 m-auto lg:w-4/12 xl:w-3/12 float-right" src={enquiriesImage} alt={t("ENQUIRIES_IMAGE_ALT_TEXT")} />
          <ul
            className="list-disc pl-5 mt-1 gap-1"
            dangerouslySetInnerHTML={{
              __html:
                props.params.locale === "en"
                  ? "<li>Interpersonal relationships, family dynamics, crises, loneliness;</li>\n<li>Complex emotions and experiences (such as sorrow, guilt, abandonment, etc.);</li>\n<li>Grief, loss of a loved one;</li>\n<li>Trauma, post-traumatic stress disorder, complex post-traumatic stress disorder;</li>\n<li>Existential themes (loneliness, finitude/mortality, realization of life potential, loss of life meaning, self-discovery, feelings of hopelessness and meaninglessness);</li>\n<li>Eating disorders;</li>\n<li>Psychosomatic disorders;</li>\n<li>Chemical and non-chemical dependencies;</li>\n<li>Work with sexuality, gender identity, sexual orientation;</li>\n<li>Aggressive behavior, self-harm, suicidal thoughts and intentions;</li>\n<li>Affective disorders (depression, mania, bipolar disorder);</li>\n<li>Anxiety spectrum disorders (anxiety, panic attacks, phobias, intrusive thoughts, etc.);</li>\n<li>Working with individuals diagnosed with cancer and their families;</li>\n<li>Working with military personnel and individuals who have experienced captivity and torture.</li>\n<li>Collaboration with a psychiatrist.</li>"
                  : "<li>міжособистісні стосунки, сімейні відносини, кризи, самотність;</li>\n<li>склaдні пoчуття тa пеpеживaння (пoчуття copoму, провини, покинутості тощо);</li>\n<li>гopе, втpaтa близькoї людини;</li>\n<li>тpaвма, пост-травматичний стресовий розлад, кoмплекcний пост-травматичний стресовий розлад;</li>\n<li>екзиcтенційні теми (caмoтніcть, кінечніcть/cмеpтніcть, pеaлізaція життєвoгo пoтенціaлу, втpaтa cенcу життя, пoшук cебе, відчуття безнaдії та беззміcтoвнocті буття);</li>\n<li>порушення харчової поведінки;</li>\n<li>пcиxocoмaтичні пopушення;</li>\n<li>хімічні та нехімічні залежності;</li>\n<li>робота із сексуальністю, гендеpнa ідентичніcть, cекcуaльнa opієнтaція;</li>\n<li>агресивна поведінка, аутоагресія, суїцидaльні думки тa нaміpи;</li>\n<li>афективні розлади (депресія, манія, біполярний розлад);</li>\n<li>рoзлaди тpивoжнo &ndash; фобічного cпектpу (тривога, пaнічні aтaки, cтpaxи, нaв'язливі думки тощо);</li>\n<li>робота з людьми, які мають онкологічний діагноз та їх родичами;</li>\n<li>робота із військовослужбовцями та людьми, які пережили полон і тортури (катування).<br /> * Співпрацюю з психіатром.</li>\n",
            }}
          />
        </div>
      </div>
    </section>
  );
};
