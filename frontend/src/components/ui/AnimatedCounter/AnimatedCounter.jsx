import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedCounter.module.css";

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

  const containerRef = useRef(null);

  const animationFrameRef = useRef(null);

  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (once && hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;

          const progress = Math.min(elapsed / duration, 1);

          /**
           * Ease Out Cubic
           */

          const eased =
            1 - Math.pow(1 - progress, 3);

          const currentValue =
            start + (end - start) * eased;

          setCount(currentValue);

          if (progress < 1) {
            animationFrameRef.current =
              requestAnimationFrame(animate);
          }
        };

        animationFrameRef.current =
          requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [start, end, duration, once]);

  return (
    <span
      ref={containerRef}
      className={styles.counter}
    >
      {prefix}
      {Number(count).toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;