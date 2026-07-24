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
      <div className={styles.developerCardWrapper}>
        <div className={styles.developerCard}>
          {/* Editor Header */}

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

          {/* Editor Code */}

          <div
            className={styles.codeBlock}
            aria-label="Developer profile code snippet"
          >
            <div className={styles.codeLine}>
              <span className={styles.codeKeyword}>
                const
              </span>

              {" "}

              <span className={styles.codeVariable}>
                {variableName}
              </span>

              <span className={styles.codeOperator}>
                {" = "}
              </span>

              <span className={styles.codePunctuation}>
                {"{"}
              </span>
            </div>

            <div
              className={`${styles.codeLine} ${styles.codeProperty}`}
            >
              <span className={styles.codeKey}>
                role
              </span>

              <span className={styles.codePunctuation}>
                :
              </span>

              {" "}

              <span className={styles.codeString}>
                "{role}"
              </span>

              <span className={styles.codePunctuation}>
                ,
              </span>
            </div>

            <div
              className={`${styles.codeLine} ${styles.codeProperty}`}
            >
              <span className={styles.codeKey}>
                stack
              </span>

              <span className={styles.codePunctuation}>
                :
              </span>

              {" "}

              <span className={styles.codePunctuation}>
                [
              </span>

              {stack.map((technology, index) => (
                <span key={technology}>
                  <span className={styles.codeString}>
                    "{technology}"
                  </span>

                  {index < stack.length - 1 && (
                    <span className={styles.codePunctuation}>
                      {", "}
                    </span>
                  )}
                </span>
              ))}

              <span className={styles.codePunctuation}>
                ],
              </span>
            </div>

            <div
              className={`${styles.codeLine} ${styles.codeProperty}`}
            >
              <span className={styles.codeKey}>
                learning
              </span>

              <span className={styles.codePunctuation}>
                :
              </span>

              {" "}

              <span className={styles.codePunctuation}>
                [
              </span>

              {learning.map((item, index) => (
                <span key={item}>
                  <span className={styles.codeString}>
                    "{item}"
                  </span>

                  {index < learning.length - 1 && (
                    <span className={styles.codePunctuation}>
                      {", "}
                    </span>
                  )}
                </span>
              ))}

              <span className={styles.codePunctuation}>
                ],
              </span>
            </div>

            <div
              className={`${styles.codeLine} ${styles.codeProperty}`}
            >
              <span className={styles.codeKey}>
                mindset
              </span>

              <span className={styles.codePunctuation}>
                :
              </span>

              {" "}

              <span className={styles.codeString}>
                "{mindset}"
              </span>

              <span className={styles.codePunctuation}>
                ,
              </span>
            </div>

            <div className={styles.codeLine}>
              <span className={styles.codePunctuation}>
                {"};"}
              </span>
            </div>

            <div
              className={`${styles.codeLine} ${styles.exportLine}`}
            >
              <span className={styles.codeKeyword}>
                export
              </span>

              {" "}

              <span className={styles.codeKeywordSecondary}>
                default
              </span>

              {" "}

              <span className={styles.codeVariable}>
                {variableName}
              </span>

              <span className={styles.codePunctuation}>
                ;
              </span>
            </div>
          </div>

          {/* Technology Grid Foundation */}

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
      </div>
    </motion.div>
  );
};

export default HeroProfileCard;