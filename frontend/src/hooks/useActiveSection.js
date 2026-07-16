import { useEffect, useState } from "react";

const useActiveSection = (navigationItems) => {
  const [activeSection, setActiveSection] = useState(() => {
    return window.location.hash.replace("#", "") || "home";
  });

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visibleSections.length) return;

        const currentSection =
          visibleSections[0].target.id;

        setActiveSection(currentSection);

        window.history.replaceState(
          null,
          "",
          `#${currentSection}`
        );
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [navigationItems]);

  return activeSection;
};

export default useActiveSection;