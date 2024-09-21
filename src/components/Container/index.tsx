import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="container mx-auto px-4 py-4"
    >
      {children}
    </motion.div>
  );
};
