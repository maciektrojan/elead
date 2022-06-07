import React from "react";
import clsx from "clsx";
import { Container } from "../Container";
import { useScroll } from "../../hooks/useScroll";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import styles from "./Bar.module.css";

type BarProps = {
  children: React.ReactNode;
};

export const Bar: React.FC<BarProps> = ({ children }) => {
  const { windowHeight } = useWindowDimensions();
  const scroll = useScroll();
  const documentHeight = document.body.scrollHeight;
  const scrollIndicator = scroll / (documentHeight - windowHeight);

  const rootClassName = clsx(
    styles.bar,
    windowHeight <= 720 && scroll > 720 ? styles.visible : "",
    windowHeight > 720 && scroll > windowHeight ? styles.visible : ""
  );

  return (
    <div className={rootClassName}>
      <Container>{children}</Container>
      <div style={{ transform: `scaleX(${scrollIndicator})` }} />
    </div>
  );
};
