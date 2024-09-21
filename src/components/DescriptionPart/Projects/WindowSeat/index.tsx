import { NextjsIcon } from "@/components/Icons/NextjsIcon";
import { Project, ProjectProps } from "../Project";
import { TypescriptIcon } from "@/components/Icons/TypescriptIcon";

export const WindowSeat = () => (
  <Project name="WindowSeat" stack={stack} description={description} />
);

const description = `Developed user management functionality and integrated paid content, including subscription processing and
the creation of forms for user interaction. <br /> Also built an admin panel for managing music content, which enabled
efficient moderation and publishing of data. <br /> Implemented application integration with external services and
payment systems for managing subscriptions and access to premium content.`;

const stack: ProjectProps["stack"] = [
  {
    name: "Next.js (App Router)",
    icon: NextjsIcon,
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
  },
];
