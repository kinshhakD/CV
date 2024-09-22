import { animation } from "@/utils/animation";
import clsx from "clsx";
import { motion } from "framer-motion";
export const Highlights = () => {
  return (
    <motion.article {...animation(0, 1.5, "right")}>
      <h3 className={clsx("font-bold text-3xl mb-2")}>Highlights:</h3>
      <p className="font-medium">
        Commitment to Excellence: Always eager to learn new technologies and
        development methodologies to stay abreast of the latest trends in web
        development. Team Collaboration: Experienced in working within a team,
        including participation in Agile development processes, ensuring
        seamless collaboration with colleagues and achieving common goals.
        Quality and Performance: Strive to produce high-quality code, paying
        attention to performance and interface optimization. My goal is to
        continue evolving in the field of Front-end development, implementing
        innovative approaches and delivering interfaces of outstanding quality
      </p>
    </motion.article>
  );
};
