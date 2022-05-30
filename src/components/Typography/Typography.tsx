import React from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

type TypographyProps = {
  className?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "caption";
  weight?: "bold";
  color?: "primaryMain" | "secondaryMain" | "grey0" | "grey900";
  children?: React.ReactNode;
};

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  caption: "p",
};

export const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  weight,
  color,
  children,
}) => {
  const tag = variantMapping[variant];
  const variantHash = styles[`variant-${variant}`];
  const weightHash = styles[`weight-${weight}`];
  const colorHash = styles[`color-${color}`];
  const rootClassName = clsx(variantHash, weightHash, colorHash, className);

  return React.createElement(tag, { className: rootClassName }, children);
};
