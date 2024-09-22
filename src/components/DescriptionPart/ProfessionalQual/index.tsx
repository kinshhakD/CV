import { animation } from "@/utils/animation";
import clsx from "clsx";
import { motion } from "framer-motion";
export const ProfessionalQual = () => {
  return (
    <motion.article {...animation(0, 1, "left")}>
      <h3 className={clsx("font-bold text-3xl mb-2")}>
        Professional Qualities:
      </h3>
      <p className="font-medium">
        React and Redux Expertise: Possess a deep understanding and hands-on
        experience in developing scalable and efficient applications using the
        React library and managing state with Redux. Experience with Next.js:
        Involved in the development of web applications using Next.js, enhancing
        performance and streamlining the development process. Proficiency in
        TypeScript: Actively leverage TypeScript to create reliable and
        maintainable code, facilitating team development and reducing errors.
        Knowledge of Vue.js: Have experience in crafting interfaces using
        Vue.js, complementing my skill set in working with various frameworks
        and libraries.
      </p>
    </motion.article>
  );
};
