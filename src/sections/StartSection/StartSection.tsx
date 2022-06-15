import React from "react";
import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";
import { Typography } from "../../components/Typography";
import { Facebook, LinkedIn, Quote, Twitter } from "../../icons";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  return (
    <section className={styles.startSection}>
      <Container className={styles.container}>
        <Nav buttonVariant="outlined" logoColor="#fff" />
        <div>
          <Typography variant="h1" color="grey0">
            <Quote color="#fff" />
            <span>Education</span>
            <br />
            is the mother
            <br />
            of <span>leadership</span>
          </Typography>
          <Typography variant="caption" weight="bold" color="grey0">
            Lorem <span>ipsum dolor sit amet</span>
          </Typography>
          <div>
            <div>
              <LinkedIn color="#fff" />
            </div>
            <div>
              <Facebook color="#fff" />
            </div>
            <div>
              <Twitter color="#fff" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
