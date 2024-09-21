import { MainPart } from "@/components/MainPart";
import styles from "./main.module.scss";
import clsx from "clsx";
import { DescriptionPart } from "@/components/DescriptionPart";

export default function Home() {
  return (
    <main className={clsx(styles.main, "flex gap-5")}>
      <MainPart />
      <DescriptionPart />
    </main>
  );
}
