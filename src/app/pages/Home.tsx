import { About, Experience, Education, Projects } from "@features";
import { useState, useEffect, useRef } from "react";
import { Sidebar } from "~/components";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const isScrolling = useRef(false);

  const handleNavClick = (sectionId: string) => {
    isScrolling.current = true;
    setActiveSection(sectionId);

    window.addEventListener(
      "scrollend",
      () => {
        isScrolling.current = false;
      },
      { once: true },
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") || "#about";

            window.history.replaceState(null, "", `#${id}`);
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px", // triggers when section is in the middle 40% of the viewport
        threshold: 0,
      },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-row gap-8 justify-between mx-auto min-h-screen max-w-screen-xl">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
      <main className="">
        <About />
        <Experience />
        <Education />
        <Projects />
      </main>
    </div>
  );
}
