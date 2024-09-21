"use client";

import styles from "./main.module.scss";
import { Container } from "@/components/Container";
import "./globals.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { Providers } from "./providers";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--montserrat-inter",
  display: "swap",
});

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
