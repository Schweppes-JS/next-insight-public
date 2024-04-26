import { ParamsPropsType } from "@/types/appTypes";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { Navigation } from "../Navigation/Navigation";
import { Headline } from "../Headline/Headline";

export const Header = (props: ParamsPropsType) => {
  return (
    <header className="w-full fixed backdrop-blur bg-stone-50/80 py-1 sm:py-2 md:py-3 lg:py-4 border-b border-slate-900/10">
      <div className="mx-auto	flex gap-2 justify-between max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">
        <Headline />
        <Navigation />
        <SocialNetworks {...props} />
        <LanguageSwitcher {...props} />
      </div>
    </header>
  );
};
