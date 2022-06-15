import React from "react";
import { Container } from "../../components/Container";
import { Typography } from "../../components/Typography";
import { Wheel } from "../../icons";
import styles from "./PromiseSection.module.css";

export function PromiseSection(): React.ReactElement {
  return (
    <section className={styles.promiseSection}>
      <div />
      <Container className={styles.container}>
        <div>
          <Typography variant="h2" color="primaryMain">
            Our promise
          </Typography>
          <Typography variant="body1" color="grey800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <div className={styles.promise}>
            <div className={styles.icon}>
              <Wheel color="#05c" />
            </div>
            <div>
              <Typography variant="h5">Lorem ipsum</Typography>
              <Typography variant="body1" color="grey800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
          <div className={styles.promise}>
            <div className={styles.icon}>
              <Wheel color="#05c" />
            </div>
            <div>
              <Typography variant="h5">Lorem ipsum</Typography>
              <Typography variant="body1" color="grey800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
          <div className={styles.promise}>
            <div className={styles.icon}>
              <Wheel color="#05c" />
            </div>
            <div>
              <Typography variant="h5">Lorem ipsum</Typography>
              <Typography variant="body1" color="grey800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
