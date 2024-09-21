import { As, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import clsx from "clsx";
import { FC } from "react";

interface IStack {
  name: string;
  icon: As;
}

export interface ProjectProps {
  name: string;
  stack: IStack[];
  description: string;
}

export const Project: FC<ProjectProps> = ({ name, stack, description }) => {
  return (
    <article className={clsx("flex flex-col gap-3 basis-1/2 px-3")}>
      <h5 className={clsx("font-semibold text-center text-2xl underline")}>
        {name}
      </h5>
      <p
        className="font-medium"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ul className={clsx("flex flex-wrap gap-3")}>
        {stack.map((stack) => (
          <li key={stack.name}>
            <Tag size="lg">
              <TagLeftIcon as={stack.icon} />
              <TagLabel>{stack.name}</TagLabel>
            </Tag>
          </li>
        ))}
      </ul>
    </article>
  );
};
