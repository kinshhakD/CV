import { TypescriptIcon } from "@/components/Icons/TypescriptIcon";
import { Project, ProjectProps } from "../Project";
import { ReactIcon } from "@/components/Icons/ReactIcon";
import { ReduxIcon } from "@/components/Icons/ReduxIcon";
import { AntDesignIcon } from "@/components/Icons/AntDesignIcon";
import { ChartIcon } from "@/components/Icons/ChartIcon";

export const SMP = () => (
  <Project
    stack={stack}
    name="Sports Model Project"
    description={description}
  />
);

const description = `Mobile(PWA) and desktop application for the sports club. <br /> Users can get different types of reports and can
communicate with the coach in real time via the mobile application. <br /> The desktop application allows a user with the
appropriate permissions to build and manage the company hierarchy. Each user role has a set of policies to control
access to private content and features.
`;

const stack: ProjectProps["stack"] = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Ant.design",
    icon: AntDesignIcon,
  },
  {
    name: "Redux-Toolkit",
    icon: ReduxIcon,
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
