import { ParamsPropsType } from "@/types/appTypes";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { DevelopedBy } from "../DevelopedBy/DevelopedBy";
import { Navigation } from "../Navigation/Navigation";
import { Headline } from "../Headline/Headline";
import { Payments } from "../Payments/Payments";

export const Footer = (props: ParamsPropsType) => {
  return (
    <footer className="mt-auto w-full bg-indigo-50">
      <div className="mx-auto	flex flex-col max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6 pt-8 pb-2">
        <div className="flex gap-2 justify-between pb-2">
          <Headline />
          <Navigation destination="footer" />
          <SocialNetworks destination="footer" {...props} />
          <LanguageSwitcher destination="footer" {...props} />
        </div>
        <hr className="my-2" />
        <div className="flex gap-2 justify-between">
          <DevelopedBy />
          <Payments />
        </div>
      </div>
    </footer>
  );
};
