import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslations } from "next-intl";

import { ParamsPropsType } from "@/types/appTypes";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { NavLink } from "../Navigation/NavLink";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";

export const HamburgerMenu = (props: ParamsPropsType) => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <Menu>
      <MenuButton className="self-center lg:!hidden">
        <RxHamburgerMenu size={24} />
      </MenuButton>
      <MenuList className="lg:!hidden">
        <MenuItem as={NavLink} href="/" className="w-full !text-right md:!hidden">
          {t("HOME")}
        </MenuItem>
        <MenuItem as={NavLink} href="/experience" className="w-full !text-right md:!hidden">
          {t("EXPERIENCE")}
        </MenuItem>
        <MenuItem as={NavLink} href="/price" className="w-full !text-right md:!hidden">
          {t("PRICE")}
        </MenuItem>
        <MenuItem as={NavLink} href="/study" className="w-full !text-right md:!hidden">
          {t("STUDY")}
        </MenuItem>
        <MenuItem as={NavLink} href="/blog" className="w-full !text-right md:!hidden">
          {t("BLOG")}
        </MenuItem>
        <MenuItem as={NavLink} href="/contacts" className="w-full !text-right md:!hidden">
          {t("CONTACTS")}
        </MenuItem>
        <MenuDivider className="md:!hidden" />
        <MenuItem className="active:bg-transparent focus:bg-transparent">
          <SocialNetworks classNames="w-full" orientation="footer" {...props} withHoverEffect />
        </MenuItem>
        <MenuItem className="active:bg-transparent focus:bg-transparent">
          <LanguageSwitcher className="w-full" withHoverEffect {...props} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
