import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-4 py-4">{children}</div>;
};
