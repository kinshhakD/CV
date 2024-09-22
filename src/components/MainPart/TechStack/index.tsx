import { NextjsIcon } from "@/components/Icons/NextjsIcon";
import { ReactIcon } from "@/components/Icons/ReactIcon";
import { VueIcon } from "@/components/Icons/VueIcon";
import clsx from "clsx";
import styles from "./index.module.scss";
import { TypescriptIcon } from "@/components/Icons/TypescriptIcon";
import { ReduxIcon } from "@/components/Icons/ReduxIcon";
import { AntDesignIcon } from "@/components/Icons/AntDesignIcon";
import { ChakraIcon } from "@/components/Icons/ChakraIcon";
import { MaterialIcon } from "@/components/Icons/MaterialIcon";
import { ChartIcon } from "@/components/Icons/ChartIcon";
import { Divider } from "@chakra-ui/react";
import { WebpackIcon } from "@/components/Icons/WebpackIcon";
import { Contacts } from "../Contacts";
import { motion } from "framer-motion";
import { animation } from "@/utils/animation";
export const TechStack = () => {
  return (
    <div>
      <h3 className={clsx("text-center font-bold text-2xl italic")}>
        Tech Stack:
      </h3>
      <ul className={clsx("flex flex-col gap-2")}>
        {frameworksStack.map((framework, idx) => (
          <motion.li
            {...animation(0, 0.75, idx % 2 === 0 ? "left" : "right")}
            key={framework.name}
            className={clsx("flex items-center gap-3")}
          >
            {framework.icon}
            <span className={clsx("italic font-semibold text-xl")}>
              {framework.name}
            </span>
          </motion.li>
        ))}
      </ul>
      <Divider className={clsx(styles.divider)} />
      <ul>
        <ul className={clsx("flex flex-col gap-2")}>
          {librariesStack.map((framework, idx) => (
            <motion.li
              {...animation(0, 1.25, idx % 2 === 0 ? "left" : "right")}
              key={framework.name}
              className={clsx("flex items-center gap-3")}
            >
              {framework.icon}
              <span className={clsx("italic font-semibold text-xl")}>
                {framework.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </ul>
      <Divider className={clsx(styles.divider)} />
      <h5 className="font-bold text-center text-2xl italic">Professional:</h5>
      <ul className={clsx("flex flex-col gap-2")}>
        {professional.map((prof, idx) => (
          <motion.li
            {...animation(0, 1.5, idx % 2 === 0 ? "left" : "right")}
            className={clsx("italic font-semibold text-xl")}
            key={prof}
          >
            {prof}
          </motion.li>
        ))}
      </ul>
      <Divider className={clsx(styles.divider)} />
      <h5 className="font-bold text-center text-2xl italic">Language:</h5>
      <ul className={clsx("flex flex-col gap-2")}>
        {languages.map((language, idx) => (
          <motion.li
            {...animation(0, 2, idx % 2 === 0 ? "left" : "right")}
            key={language.name}
            className={clsx("italic font-semibold text-xl")}
          >
            {`${language.name} - ${language.value}`}
          </motion.li>
        ))}
      </ul>
      <Divider className={styles.divider} />
      <Contacts />
    </div>
  );
};

const iconSize = {
  width: 24,
  height: 24,
};

const librariesSize = {
  width: 24,
  height: 24,
};

const frameworksStack = [
  {
    name: "React",
    icon: <ReactIcon {...iconSize} />,
  },
  {
    name: "Next.js (App Router)",
    icon: <NextjsIcon {...iconSize} />,
  },
  {
    name: "Vue.js",
    icon: <VueIcon {...iconSize} />,
  },
  {
    name: "Typescript",
    icon: <TypescriptIcon {...iconSize} />,
  },
];

const librariesStack = [
  {
    name: "Redux/Redux-Toolkit/RTQ",
    icon: <ReduxIcon {...librariesSize} />,
  },
  {
    name: "Ant.design",
    icon: <AntDesignIcon {...librariesSize} />,
  },
  {
    name: "Chakra-ui",
    icon: <ChakraIcon {...librariesSize} />,
  },
  {
    name: "Material.ui",
    icon: <MaterialIcon {...librariesSize} />,
  },
  {
    name: "Chart.js",
    icon: <ChartIcon {...librariesSize} />,
  },
  {
    name: "Webpack",
    icon: <WebpackIcon {...librariesSize} />,
  },
];

const languages = [
  {
    name: "English",
    value: "Intermediate",
  },
  {
    name: "Ukrainian",
    value: "Native",
  },
];

const professional = [
  "Problem solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time management",
];
