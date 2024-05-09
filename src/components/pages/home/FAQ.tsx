import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

import { AnyType } from "@/types/generalTypes";

export const FAQ = () => {
  const t = useTranslations("HOME.FAQ");

  return (
    <section className="flex flex-col">
      <h2 className="text-3xl">{t("TITLE")}</h2>
      <Accordion className="[&>div:first-child]:!border-transparent !bg-stone-50/80 !rounded overflow-hidden !shadow-inner" allowMultiple>
        {[...Array(7)].map((_, index) => (
          <AccordionItem key={index}>
            <AccordionButton className="!flex !justify-between md:!text-xl text-left">
              {t<AnyType>(`LIST.${index + 1}.QUESTION`)}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="!bg-indigo-50 !indent-2">{t<AnyType>(`LIST.${index + 1}.ANSWER`)}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
