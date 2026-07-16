import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";

import currentFocus from "../../../data/currentFocus";

import FocusCard from "./FocusCard";

import styles from "./CurrentFocus.module.css";

const CurrentFocus = () => {
  return (
    <Section id="mission">
      <Container>
        <SectionHeading
          subtitle="Current Focus"
          title="What I'm Building Right Now"
        />

        <div className={styles.grid}>
          {currentFocus.map((item) => (
            <FocusCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CurrentFocus;