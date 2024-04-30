import { PiPaypalLogoFill, PiBankBold } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";

export const Payments = () => {
  return (
    <section className="flex">
      <ul className="flex gap-2">
        <li>
          <PiPaypalLogoFill size={20} />
        </li>
        <li>
          <PiBankBold size={20} />
        </li>
        <li>
          <BsCashCoin className="translate-y-0.5" size={20} />
        </li>
      </ul>
    </section>
  );
};
