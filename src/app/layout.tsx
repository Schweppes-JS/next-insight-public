import { ReactNode } from "react";

import "./globals.css";

type RootLayoutPropsType = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: RootLayoutPropsType) => children;

export default RootLayout;
