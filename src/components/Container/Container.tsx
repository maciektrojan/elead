import React from "react";
import clsx from "clsx";
import styles from "./Container.module.css";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  const rootClassName = clsx(styles.container, className);

  return <div className={rootClassName}>{children}</div>;
};
