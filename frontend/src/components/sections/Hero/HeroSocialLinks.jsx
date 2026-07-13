import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import styles from "./Hero.module.css";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

const HeroSocialLinks = ({
  socialLinks,
  itemVariants,
}) => {
  return (
    <motion.div
      className={styles.socialLinks}
      variants={itemVariants}
    >
      {socialLinks.map((social) => {
        const Icon = iconMap[social.name];

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={styles.socialLink}
          >
            <Icon />
          </a>
        );
      })}
    </motion.div>
  );
};

export default HeroSocialLinks;