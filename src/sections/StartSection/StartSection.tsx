import React from "react";
import { Container } from "../../components/Container";
import { Typography } from "../../components/Typography";
import { Facebook, LinkedIn, Twitter, Quote } from "../../icons";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  return (
    <section className={styles.startSection}>
      <Container className={styles.container}>
        <div>{/* nav */}</div>
        <div>
          <Typography variant="h1" color="grey0">
            <Quote />
            <span>Education</span>
            <br />
            is the mother
            <br />
            of <span>leadership</span>
          </Typography>
          <Typography variant="caption" weight="bold" color="grey0">
            Lorem <span>ipsum dolor sit amet</span>
          </Typography>
          <div>
            <div>
              <LinkedIn />
            </div>
            <div>
              <Facebook />
            </div>
            <div>
              <Twitter />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
