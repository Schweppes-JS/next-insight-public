import { Inter } from "next/font/google";
import type { Metadata } from "next";
import cn from "classnames";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Шляхтіна Марія",
  description:
    "Клінічний психолог, сертифікований гештальт-терапевт, навчаючий тренер, засновник Центру практичної психології та психотерапії «Інсайт», член EFPA, УСП, НПА.",
  keywords:
    "міжособистісні стосунки, сімейні відносини, кризи, самотність склaдні пoчуття тa пеpеживaння (пoчуття copoму, провини, покинутості тощо), гopе, втpaтa близькoї людини, тpaвма, пост-травматичний стресовий розлад, кoмплекcний пост-травматичний стресовий розлад, екзиcтенційні теми (caмoтніcть, кінечніcть/cмеpтніcть, pеaлізaція життєвoгo пoтенціaлу, втpaтa cенcу життя, пoшук cебе, відчуття безнaдії та беззміcтoвнocті буття),порушення харчової поведінки,пcиxocoмaтичні пopушення,хімічні та нехімічні залежності,робота із сексуальністю, гендеpнa ідентичніcть, cекcуaльнa opієнтaція,агресивна поведінка, аутоагресія, суїцидaльні думки тa нaміpи,афективні розлади (депресія, манія, біполярний розлад),рoзлaди тpивoжнo – фобічного cпектpу (тривога, пaнічні aтaки, cтpaxи, нaв'язливі думки тощо),робота з людьми, які мають онкологічний діагноз та їх родичами,робота із військовослужбовцями та людьми, які пережили полон і тортури (катування).",
};

type RootLayoutPropsType = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: RootLayoutPropsType) => (
  <html className="min-h-screen flex" lang="uk">
    <body className={cn(inter.className, "flex flex-col bg-orange-50 flex-auto text-indigo-950")}>
      <Header />
      <main className="max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6 pt-32">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
