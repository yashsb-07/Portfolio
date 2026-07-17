import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedCounter.module.css";

const easeOutCubic = (progress) => {
  return 1 - Math.pow(1 - progress, 3);
};

const formatNumber = (value, decimals) => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

const AnimatedCounter = ({
  start = 0,
  end = 100,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  once = true,
}) => {
  const [count, setCount] = useState(start);

  const counterRef = useRef(null);
  const animationFrameRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = easeOutCubic(progress);

        const currentValue =
          start + (end - start) * easedProgress;

        setCount(currentValue);

        if (progress < 1) {
          animationFrameRef.current =
            requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        if (once && hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        startAnimation();

        if (once) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [start, end, duration, once]);

  return (
    <span
      ref={counterRef}
      className={styles.counter}
    >
      {prefix}
      {formatNumber(count, decimals)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;