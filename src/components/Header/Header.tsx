import { FaTelegramPlane, FaFacebook, FaViber } from "react-icons/fa";
import Link from "next/link";

import { ownPhone, phoneNumber } from "@/constants/personalInfo";

export const Header = () => {
  return (
    <header className="w-full fixed bg-stone-50 py-1 sm:py-2 md:py-3 lg:py-4">
      <div className="mx-auto	flex gap-2 justify-between max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">
        <section className="self-center flex flex-col max-w-64">
          <h1 className="text-2xl text-center">
            <Link href="/">Шляхтіна Марія</Link>
          </h1>
          <p className="text-xs text-center">засновник Центру практичної психології та психотерапії «Інсайт»</p>
        </section>
        <section className="self-center">
          <nav>
            <ul className="flex text-sm gap-4">
              <li>
                <Link href="/">Головна</Link>
              </li>
              <li>
                <Link href="/experience">Досвід/Освіта</Link>
              </li>
              <li>
                <Link href="/price">Вартість</Link>
              </li>
              <li>
                <Link href="/study">{`Навчальні проекти "Інсайт"`}</Link>
              </li>
              <li>
                <Link href="/blog">Статті</Link>
              </li>
              <li>
                <Link href="/contacts">Контакти</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="self-center flex gap-4">
          <a className="self-center whitespace-nowrap" href={`tel:${phoneNumber}`}>
            {ownPhone.number?.national}
          </a>
          <a className="self-center" href="https://t.me/mariya_shlyakhtina" target="_blank">
            <FaTelegramPlane className="fill-red-400" />
          </a>
          <a className="self-center" href="https://www.facebook.com/maria.schliakhtina" target="_blank">
            <FaFacebook className="fill-red-400" />
          </a>
          <a className="self-center" href="viber://chat?number=+380677378913">
            <FaViber className="fill-red-400" />
          </a>
        </section>
        <section className="self-center flex gap-4">
          <Link href="." locale="en">
            EN
          </Link>
          <Link href="." locale="uk">
            UA
          </Link>
        </section>
      </div>
    </header>
  );
};
