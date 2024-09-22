import { VueIcon } from "@/components/Icons/VueIcon";
import { Project, ProjectProps } from "../Project";
import { ChartIcon } from "@/components/Icons/ChartIcon";
import { TypescriptIcon } from "@/components/Icons/TypescriptIcon";
import { animation } from "@/utils/animation";

export const Reporter = () => (
  <Project
    animation={animation(0, 1.75, "right")}
    name="Time Reporter"
    description={description}
    stack={stack}
  />
);

const description = `An application that collects statistics from different services and
displays a report on time periods that you can analyze and add plans
for the future`;

const stack: ProjectProps["stack"] = [
  {
    name: "Vue.js",
    icon: VueIcon,
  },
  {
    name: "Chart.js",
    icon: ChartIcon,
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
  },
];
