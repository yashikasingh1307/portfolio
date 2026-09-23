import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Close the mobile menu on Escape (ported from js/nav.js)
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scrollspy: highlight the current section in the nav (ported from js/scrollspy.js)
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Hero ("top") isn't a nav link, so clear the active state
          // instead of leaving the previous section highlighted.
          setActiveId(entry.target.id === "top" ? null : entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);

    LINKS.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top">
          YASHIKA SINGH
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-list"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`nav__list${isOpen ? " is-open" : ""}`}
          id="nav-list"
          ref={listRef}
        >
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                className={`nav__link${activeId === href.slice(1) ? " is-active" : ""}`}
                href={href}
                aria-current={activeId === href.slice(1) ? "true" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;