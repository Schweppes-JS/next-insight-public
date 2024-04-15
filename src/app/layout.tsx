import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Шляхтіна Марія",
  description:
    "Клінічний психолог, сертифікований гештальт-терапевт, навчаючий тренер, засновник Центру практичної психології та психотерапії «Інсайт», член EFPA, УСП, НПА.",
  keywords:
    "міжособистісні стосунки, сімейні відносини, кризи, самотність склaдні пoчуття тa пеpеживaння (пoчуття copoму, провини, покинутості тощо), гopе, втpaтa близькoї людини, тpaвма, пост-травматичний стресовий розлад, кoмплекcний пост-травматичний стресовий розлад, екзиcтенційні теми (caмoтніcть, кінечніcть/cмеpтніcть, pеaлізaція життєвoгo пoтенціaлу, втpaтa cенcу життя, пoшук cебе, відчуття безнaдії та беззміcтoвнocті буття),порушення харчової поведінки,пcиxocoмaтичні пopушення,хімічні та нехімічні залежності,робота із сексуальністю, гендеpнa ідентичніcть, cекcуaльнa opієнтaція,агресивна поведінка, аутоагресія, суїцидaльні думки тa нaміpи,афективні розлади (депресія, манія, біполярний розлад),рoзлaди тpивoжнo – фобічного cпектpу (тривога, пaнічні aтaки, cтpaxи, нaв'язливі думки тощо),робота з людьми, які мають онкологічний діагноз та їх родичами,робота із військовослужбовцями та людьми, які пережили полон і тортури (катування).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
