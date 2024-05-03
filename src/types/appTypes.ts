import { Metadata } from "next";

import { locales } from "@/constants/appConfig";

export type LayoutPlace = "header" | "footer";

export type AppLocaleType = (typeof locales)[number];

export type ParamsPropsType = { params: { locale: AppLocaleType } };

export type GenerateMetadataType = (props: ParamsPropsType) => Promise<Metadata>;

export type LayoutPropsType = Readonly<{ children: React.ReactNode; params: { locale: AppLocaleType } }>;

export type LocalePropsType = { params: { locale: AppLocaleType }; searchParams: Record<string, string> };
