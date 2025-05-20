import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleIntersect = (entries) => {
      let maxRatio = 0;
      let visibleSection = "";

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        setActive(visibleSection);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // поріг від 0 до 1 по кроку 0.01
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
