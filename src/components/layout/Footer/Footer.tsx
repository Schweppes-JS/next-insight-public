import { ParamsPropsType } from "@/types/appTypes";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { DevelopedBy } from "../DevelopedBy/DevelopedBy";
import { Navigation } from "../Navigation/Navigation";
import { Headline } from "../Headline/Headline";
import { Payments } from "../Payments/Payments";
import { SubMenu } from "../SubMenu/SubMenu";

export const Footer = (props: ParamsPropsType) => {
  return (
    <footer className="mt-auto w-full bg-indigo-50 border-t border-slate-900/10">
      <div className="mx-auto	flex flex-col max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6 pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-2">
        <div className="flex gap-2 justify-around sm:justify-between pb-2">
          <Headline orientation="footer" />
          <Navigation orientation="footer" />
          <SocialNetworks orientation="footer" {...props} />
          <LanguageSwitcher orientation="footer" {...props} />
        </div>
        <hr className="mb-2 sm:my-2" />
        <div className="flex gap-4 justify-between items-center">
          <DevelopedBy />
          <SubMenu />
          <Payments />
        </div>
      </div>
    </footer>
  );
};
