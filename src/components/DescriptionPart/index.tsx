"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";
import { CareerSummary } from "./CareerSummary";
import { ProfessionalQual } from "./ProfessionalQual";
import { Divider } from "@chakra-ui/react";
import { Highlights } from "./Highlights";
import { Projects } from "./Projects";
import { Education } from "./Education";

export const DescriptionPart = () => {
  return (
    <motion.section
      initial={{
        x: 20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={styles.descriptionPart}
    >
      <CareerSummary />
      <Divider className="my-5" />
      <ProfessionalQual />
      <Divider className="my-5" />
      <Highlights />
      <Divider className="my-5" />
      <Projects />
      <Divider className="my-5" />
      <Education />
    </motion.section>
  );
};
