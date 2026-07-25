import {
  motion,
  useReducedMotion,
} from "framer-motion";

import styles from "./Hero.module.css";

const HeroProfileCard = ({
  profile,
  profileVariants,
}) => {
  const shouldReduceMotion =
    useReducedMotion();

  const {
    fileName,
    variableName,
    role,
    stack,
    learning,
    mindset,
    technologies,
  } = profile;

  const codeContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: shouldReduceMotion
          ? 0
          : 0.08,

        delayChildren: shouldReduceMotion
          ? 0
          : 0.25,
      },
    },
  };

  const codeLineVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 10,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: shouldReduceMotion
          ? 0
          : 0.4,

        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techGridVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: shouldReduceMotion
          ? 0
          : 0.06,

        delayChildren: shouldReduceMotion
          ? 0
          : 0.65,
      },
    },
  };

  const techItemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 14,
      scale: shouldReduceMotion ? 1 : 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: shouldReduceMotion
          ? 0
          : 0.4,

        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={styles.right}
      variants={profileVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.developerCardWrapper}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                y: -6,
              }
        }
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
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

          {/* Developer Code */}

          <motion.div
            className={styles.codeBlock}
            aria-label="Developer profile code snippet"
            variants={codeContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={styles.codeLine}
              variants={codeLineVariants}
            >
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
            </motion.div>

            <motion.div
              className={`${styles.codeLine} ${styles.codeProperty}`}
              variants={codeLineVariants}
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
            </motion.div>

            <motion.div
              className={`${styles.codeLine} ${styles.codeProperty}`}
              variants={codeLineVariants}
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
            </motion.div>

            <motion.div
              className={`${styles.codeLine} ${styles.codeProperty}`}
              variants={codeLineVariants}
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
            </motion.div>

            <motion.div
              className={`${styles.codeLine} ${styles.codeProperty}`}
              variants={codeLineVariants}
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
            </motion.div>

            <motion.div
              className={styles.codeLine}
              variants={codeLineVariants}
            >
              <span className={styles.codePunctuation}>
                {"};"}
              </span>
            </motion.div>

            <motion.div
              className={`${styles.codeLine} ${styles.exportLine}`}
              variants={codeLineVariants}
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
            </motion.div>
          </motion.div>

          {/* Technology Grid */}

          <motion.div
            className={styles.developerTechGrid}
            aria-label="Core technologies"
            variants={techGridVariants}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  className={styles.developerTechItem}
                  title={technology.name}
                  variants={techItemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          scale: 1.03,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                >
                  <Icon
                    className={styles.developerTechIcon}
                    aria-hidden="true"
                  />

                  <span className={styles.developerTechName}>
                    {technology.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroProfileCard;