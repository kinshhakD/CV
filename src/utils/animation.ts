import { HTMLMotionProps } from "framer-motion";

export const animation = (
  index = 0,
  duration = 0.5,
  from: "left" | "right" = "left",
): HTMLMotionProps<any> => ({
  initial: {
    x: from === "left" ? -20 : 20,
    opacity: 0,
  },
  animate: { x: 0, opacity: 1 },
  transition: { ease: "easeIn", duration: duration * (index + 1) },
});
