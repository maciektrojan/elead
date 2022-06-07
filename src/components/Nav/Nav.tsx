import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { useScroll } from "../../hooks/useScroll";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Logo } from "../../icons";
import styles from "./Nav.module.css";

type NavProps = {
  variant?: "secondary";
  buttonVariant: "contained" | "outlined";
  logoColor: string;
};

export const Nav: React.FC<NavProps> = ({
  variant,
  logoColor,
  buttonVariant,
}) => {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const scroll = useScroll();

  const [open, setOpen] = useState(false);
  const handleHamburgerClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    windowHeight <= 720 && scroll <= 720 && setOpen(false);
    windowHeight > 720 && scroll <= windowHeight && setOpen(false);
  }, [windowHeight, scroll]);

  const renderButton = (content: string) => {
    return <Button variant={buttonVariant}>{content}</Button>;
  };

  type Link = {
    id: number;
    url: string;
    content: string;
    linkRender?: (content: string) => React.ReactNode;
  };

  const links: Link[] = [
    { id: 1, url: "promise", content: "Promise" },
    { id: 2, url: "portfolio", content: "Portfolio" },
    { id: 3, url: "team", content: "Team" },
    { id: 4, url: "blog", content: "Blog" },
    { id: 5, url: "contact", content: "Contact", linkRender: renderButton },
  ];

  const rootClassName = clsx(
    styles.nav,
    styles[`nav-${variant}`],
    open ? styles.open : ""
  );

  return (
    <div className={rootClassName}>
      <Logo color={logoColor} />
      <div className={styles.parentElement}>
        <div className={styles.childrenElement}>
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                activeClass={styles.active}
                to={link.url}
                spy={true}
                smooth={true}
                duration={500}
                href=""
                tabIndex={-1}
              >
                {link.linkRender && windowWidth > 768 ? (
                  link.linkRender(link.content)
                ) : (
                  <Typography variant="caption">{link.content}</Typography>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <button className={styles.hamburger} onClick={handleHamburgerClick}>
        <div />
      </button>
    </div>
  );
};
