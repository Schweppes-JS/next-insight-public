import { useTranslations } from "next-intl";
import Image from "next/image";

import { FacebookOfEnterprise } from "@/components/pages/study/FacebookOfEnterprise";
import { facebookInsightLink } from "@/constants/enterpriseInfo";
import InsightImage from "@/../public/insight.png";
import { LocalePropsType } from "@/types/appTypes";
import { withLocale } from "@/helpers/withLocale";

const Study = (props: LocalePropsType) => {
  const t = useTranslations("STUDY");

  return (
    <>
      <a className="self-center" href={facebookInsightLink} target="_blank">
        <Image
          className="rounded-md shadow-lg"
          src={InsightImage}
          sizes="100vw"
          alt={t("IMAGE_ALT_TEXT")}
          priority
          quality={100}
          placeholder="blur"
        />
      </a>
      <section
        className="flex flex-col gap-2 [&>p]:indent-4"
        dangerouslySetInnerHTML={{
          __html:
            props.params.locale === "en"
              ? '<p>In April 2017, I established the Center for Practical Psychology and Psychotherapy "Insight", which has become a place for receiving psychological assistance, as well as providing educational services for psychologists and psychotherapists.</p>\n<p>During this time, the center has hosted over 100 training seminars and courses, both in-person and online. Over one and a half thousand individuals have had the opportunity to enhance their competencies, acquire new skills, refine existing knowledge, and explore new avenues for professional development.</p>\n<p>At the center, I aim to cultivate a conducive atmosphere for exchanging experiences and mutual support among professionals. Each course or event not only expands participants\' knowledge but also facilitates valuable professional networking and the forging of new connections and friendships within the field of psychology and psychotherapy.</p>\n<p>Join our educational programs to enhance your qualifications and find a community of like-minded individuals who, together with you, are evolving and inspired by new achievements. We invite you to embark on the journey of discovery of new horizons!</p>'
              : "<p>У квітні 2017 року мною був створений Центр практичної психології та психотерапії «Інсайт», який став місцем отримання психологічної допомоги, а також місцем надання послуг у сфері освіти для психологів та психотерапевтів.</p>\n<p>За цей час у центрі було проведено більше 100 навчальних семінарів та навчальних курсів, які відбувалися та відбуваються як в очному так і в онлайн форматі. За цей час більше півтора тисячі осіб мали можливість підвищити рівень власної компетенції, опанувати нові та вдосконалити вже наявні знання, навички та вміння, а також знайти нові шляхи для професійного розвитку.</p>\n<p>У центрі я прагну створити сприятливу атмосферу для обміну досвідом та взаємної підтримки серед фахівців. Кожен курс чи захід не лише розширює знання учасників, а й допомагає побудувати цінні професійні контакти та знайти нових колег та друзів у сфері психології та психотерапії.</p>\n<p>Приєднюйтеся до наших освітніх програм аби підвищити свою кваліфікацію та знайти спільноту однодумців, які разом з вами розвиваються і надихаються на нові досягнення. Запрошуємо до відкриття нових горизонтів!</p>",
        }}
      />
      <FacebookOfEnterprise />
    </>
  );
};

export default withLocale(Study);
