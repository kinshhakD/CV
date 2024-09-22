import { animation } from "@/utils/animation";
import { Project } from "../Projects/Project";

export const Education = () => (
  <Project
    animation={animation(0, 1.75, "left")}
    name="Education / The National Technical University, (NTU “KhPI”)"
    stack={[]}
    description={description}
  />
);

const description = `
Faculty of Engineering and Physics. Department of Applied Mathematics and Computer Modeling. Master degrees
`;
