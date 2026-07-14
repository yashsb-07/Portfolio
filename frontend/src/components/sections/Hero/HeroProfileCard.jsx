import { motion } from "framer-motion";

import styles from "./Hero.module.css";

const HeroProfileCard = ({
  profile,
  profileVariants,
}) => {
  return (
    <motion.div
      className={styles.right}
      variants={profileVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.profileCard}>
        <div className={styles.avatar}>
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className={styles.avatarImage}
          />
        </div>

        <h3>{profile.name}</h3>

        <p>{profile.role}</p>

        <div className={styles.status}>
          <span className={styles.dot}></span>

          {profile.status}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProfileCard;