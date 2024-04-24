import { FaTelegramPlane, FaFacebook, FaViber } from "react-icons/fa";
import cn from "classnames";

import { facebookLink, ownPhone, phoneNumber, telegramLink, viberLink } from "@/constants/personalInfo";
import { LayoutPlace, ParamsPropsType } from "@/types/appTypes";

type SocialNetworksPropsType = { destination?: LayoutPlace } & ParamsPropsType;

export const SocialNetworks = ({ params, destination = "header" }: SocialNetworksPropsType) => (
  <section className={cn("self-center gap-4", { ["flex"]: destination === "header", ["grid grid-cols-3"]: destination === "footer" })}>
    <a
      className={cn("self-center justify-self-center whitespace-nowrap", {
        ["col-start-1	col-end-4	"]: destination === "footer",
      })}
      href={`tel:${phoneNumber}`}
    >
      {ownPhone.number?.[params.locale === "uk" ? "national" : "international"]}
    </a>
    <a className="self-center justify-self-center hover:scale-105" href={telegramLink} target="_blank">
      <FaTelegramPlane className="fill-red-400" />
    </a>
    <a className="self-center justify-self-center hover:scale-105" href={facebookLink} target="_blank">
      <FaFacebook className="fill-red-400" />
    </a>
    <a className="self-center justify-self-center hover:scale-105" href={viberLink}>
      <FaViber className="fill-red-400" />
    </a>
  </section>
);
