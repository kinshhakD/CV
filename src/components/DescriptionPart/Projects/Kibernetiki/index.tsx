import { ReactIcon } from "@/components/Icons/ReactIcon";
import { Project, ProjectProps } from "../Project";
import { NextjsIcon } from "@/components/Icons/NextjsIcon";
import { ReduxIcon } from "@/components/Icons/ReduxIcon";
import { AntDesignIcon } from "@/components/Icons/AntDesignIcon";
import { TypescriptIcon } from "@/components/Icons/TypescriptIcon";
import { animation } from "@/utils/animation";

export const Kibernetiki = () => {
  return (
    <Project
      animation={animation(0, 1.75, "left")}
      description={description}
      name="Kibernetiki"
      stack={stack}
    />
  );
};

const description = `SEO Optimization: Implemented robust SEO practices to ensure maximum visibility and ranking on search engines,
attracting organic traffic to the platform. <br />
Performance Optimization (PageSpeed): Prioritized user experience through the optimization of page loading
times, ensuring a seamless and responsive browsing process for customers. <br />
Dynamic Route Parsing for Filters: Introduced an innovative dynamic route parsing mechanism, allowing instant
adaptation of content display for each selected filter. This functionality provides individual and instantaneous
presentation of search results, enhancing the usability of the platform. <br />
Interactive Sliders: Incorporated visually appealing sliders to showcase featured products and highlight key
promotions, improving the overall visual appeal and user engagement. <br />
Form Integration: Seamlessly integrated forms to facilitate user interactions, collect valuable data, and gather
feedback, thereby enhancing the overall user experience and engagement. <br />
Tabulated Information: Implemented tables to present technical specifications, prices, and other essential
details in a structured and easily understandable format, assisting customers in making informed purchase
decisions. <br />
This project serves as a demonstration of my experience in Next.js development, showcasing a harmonious
blend of technical expertise, performance optimization, and user-ce`;

const stack: ProjectProps["stack"] = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js (Page Router)",
    icon: NextjsIcon,
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
    name: "Typescript",
    icon: TypescriptIcon,
  },
];
