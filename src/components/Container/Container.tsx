import clsx from "clsx";
import React from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
