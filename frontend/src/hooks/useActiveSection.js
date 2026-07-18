import { useEffect, useState } from "react";

const DEFAULT_SECTION = "home";
const NAVBAR_OFFSET = 100;

const useActiveSection = (navigationItems) => {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");

    const isValidSection = navigationItems.some(
      (item) => item.id === hash
    );

    return isValidSection
      ? hash
      : DEFAULT_SECTION;
  });

  useEffect(() => {
    const sections = navigationItems
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + NAVBAR_OFFSET;

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition
        ) {
          currentSection = section;
        }
      });

      const currentSectionId =
        currentSection.id;

      setActiveSection((previousSection) => {
        if (
          previousSection === currentSectionId
        ) {
          return previousSection;
        }

        return currentSectionId;
      });

      const currentHash =
        window.location.hash.replace("#", "");

      if (currentHash !== currentSectionId) {
        window.history.replaceState(
          null,
          "",
          `#${currentSectionId}`
        );
      }
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();

        ticking = false;
      });
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, [navigationItems]);

  return activeSection;
};

export default useActiveSection;