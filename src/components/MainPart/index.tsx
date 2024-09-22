"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { TechStack } from "./TechStack";

export const MainPart = () => {
  return (
    <motion.section
      initial={{
        x: -20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={clsx(styles.mainPart)}
    >
      <div className={styles.mainPart__content}>
        <h1 className={clsx("text-center mb-3", styles.userTitle)}>
          Danylo Kinshchak
          <br />
          Middle Frontend Developer
        </h1>
        <div className={clsx(styles.userImage, "flex justify-center mb-3")}>
          <div className={styles.userImage__image}>
            <Image src={"/img/avatar.jpg"} fill alt="Danylo Kinshchak" />
          </div>
        </div>
        <TechStack />
      </div>
    </motion.section>
  );
};
