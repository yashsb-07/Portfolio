import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaPython, FaAws } from "react-icons/fa";

import Container from "../../common/Container/Container";
import Button from "../../ui/Button/Button";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          {/* Left Content */}
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Available for Opportunities
            </div>

            <p className={styles.greeting}>Hello, I'm</p>

            <h1 className={styles.name}>
              Yash <span>Bansode</span>
            </h1>

            <h2 className={styles.role}>
              Python Full Stack Developer
            </h2>

            <p className={styles.description}>
              I'm an MCA student passionate about creating modern,
              scalable web applications using React, Django and
              PostgreSQL while continuously growing my expertise in
              AWS Cloud Engineering and Data Structures.
            </p>

            <div className={styles.actions}>
              <Button>
                View Projects
                <FiArrowRight />
              </Button>

              <Button variant="secondary">
                Download Resume
                <FiDownload />
              </Button>
            </div>

            <div className={styles.techRow}>
              <div className={styles.techItem}>
                <FaReact />
                React
              </div>

              <div className={styles.techItem}>
                <FaPython />
                Python
              </div>

              <div className={styles.techItem}>
                <FaAws />
                AWS
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.right}>
            <div className={styles.profileCard}>
              <div className={styles.imageCircle}>
                Your Photo
              </div>

              <div className={styles.profileInfo}>
                <h3>Always Building.</h3>

                <p>Always Learning.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;