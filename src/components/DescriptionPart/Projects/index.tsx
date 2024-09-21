import { Divider } from "@chakra-ui/react";
import { Kibernetiki } from "./Kibernetiki";
import { WindowSeat } from "./WindowSeat";
import { SMP } from "./SMP";
import { Reporter } from "./Reporter";
import clsx from "clsx";

export const Projects = () => {
  return (
    <section className={clsx("flex gap-3 flex-col")}>
      <Kibernetiki />
      <Divider className="my-5" />
      <WindowSeat />
      <Divider className="my-5" />
      <SMP />
      <Divider className="my-5" />
      <Reporter />
    </section>
  );
};
