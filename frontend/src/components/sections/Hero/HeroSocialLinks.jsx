import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
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
      aria-label="Social links"
    >
      {socialLinks.map((social) => {
        const Icon = iconMap[social.name];

        if (!Icon) {
          return null;
        }

        const isEmail =
          social.url.startsWith("mailto:");

        return (
          <a
            key={social.name}
            href={social.url}
            target={
              isEmail
                ? undefined
                : "_blank"
            }
            rel={
              isEmail
                ? undefined
                : "noopener noreferrer"
            }
            className={styles.socialLink}
            aria-label={
              isEmail
                ? `Email ${social.name}`
                : `Visit ${social.name} profile`
            }
          >
            <Icon
              className={styles.socialIcon}
              aria-hidden="true"
            />

            <span>{social.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
};

export default HeroSocialLinks;