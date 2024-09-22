import styles from "./main.module.scss";
import { Container } from "@/components/Container";
import "./globals.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { Providers } from "./providers";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--montserrat-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinshchak Danylo | Middle Frontend Developer",
  description:
    "I am an experienced Middle Front-end developer with over four years of hands-on experience in crafting innovative and high-performance web applications. My professional focus lies in the development using modern technologies such as React, Next.js and Vue.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(montserrat.className, montserrat.variable, styles.body)}
      >
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
