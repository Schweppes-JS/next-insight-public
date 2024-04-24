import { PiPaypalLogoFill, PiBankBold } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";

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
          <HiOutlineBanknotes size={20} />
        </li>
      </ul>
    </section>
  );
};
