import { animation } from "@/utils/animation";
import clsx from "clsx";
import { motion } from "framer-motion";
export const CareerSummary = () => {
  return (
    <motion.article {...animation(0, 0.5, "right")}>
      <h3 className={clsx("font-bold text-3xl mb-2")}>Career Summary:</h3>
      <p className="font-medium">
        I am an experienced Middle Front-end developer with over four years of
        hands-on experience in crafting innovative and high-performance web
        applications. My professional focus lies in the development using modern
        technologies such as React, Next.js and Vue.js.
      </p>
    </motion.article>
  );
};
