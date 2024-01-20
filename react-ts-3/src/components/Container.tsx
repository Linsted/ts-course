import { type ElementType } from "react";

type ContainerProps = {
  as: ElementType;
  children?: React.ReactNode;
};

const Container = ({ children, as: Component }: ContainerProps) => {
  // or we can write -  const Component = as;
  return <Component>{children}</Component>;
};

export default Container;
