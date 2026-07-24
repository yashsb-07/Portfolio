import { motion } from "framer-motion";

import styles from "./Hero.module.css";

const HeroProfileCard = ({
  profile,
  profileVariants,
}) => {
  const {
    fileName,
    variableName,
    role,
    stack,
    learning,
    mindset,
  } = profile;

  return (
    <motion.div
      className={styles.right}
      variants={profileVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.developerCard}>
        <div className={styles.editorHeader}>
          <div
            className={styles.windowControls}
            aria-hidden="true"
          >
            <span
              className={`${styles.windowDot} ${styles.windowDotRed}`}
            />

            <span
              className={`${styles.windowDot} ${styles.windowDotYellow}`}
            />

            <span
              className={`${styles.windowDot} ${styles.windowDotGreen}`}
            />
          </div>

          <span className={styles.fileName}>
            {fileName}
          </span>
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeLine}>
            <span className={styles.codeKeyword}>
              const
            </span>

            {" "}

            <span className={styles.codeVariable}>
              {variableName}
            </span>

            <span className={styles.codeText}>
              {" = {"}
            </span>
          </div>

          <div className={styles.codeProperty}>
            <span className={styles.codeKey}>
              role:
            </span>

            {" "}

            <span className={styles.codeString}>
              "{role}",
            </span>
          </div>

          <div className={styles.codeProperty}>
            <span className={styles.codeKey}>
              stack:
            </span>

            {" "}

            <span className={styles.codeArray}>
              [
              {stack.map((technology, index) => (
                <span key={technology}>
                  <span className={styles.codeString}>
                    "{technology}"
                  </span>

                  {index < stack.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
              ],
            </span>
          </div>

          <div className={styles.codeProperty}>
            <span className={styles.codeKey}>
              learning:
            </span>

            {" "}

            <span className={styles.codeArray}>
              [
              {learning.map((item, index) => (
                <span key={item}>
                  <span className={styles.codeString}>
                    "{item}"
                  </span>

                  {index < learning.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
              ],
            </span>
          </div>

          <div className={styles.codeProperty}>
            <span className={styles.codeKey}>
              mindset:
            </span>

            {" "}

            <span className={styles.codeString}>
              "{mindset}",
            </span>
          </div>

          <div className={styles.codeLine}>
            <span className={styles.codeText}>
              {"};"}
            </span>
          </div>

          <div className={styles.exportLine}>
            <span className={styles.codeKeyword}>
              export default
            </span>

            {" "}

            <span className={styles.codeVariable}>
              {variableName}
            </span>

            <span className={styles.codeText}>
              ;
            </span>
          </div>
        </div>

        <div
          className={styles.techGridPlaceholder}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfileCard;