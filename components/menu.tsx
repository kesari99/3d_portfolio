"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, socials } from "@/content/site";

export function Menu() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [prominent, setProminent] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const nearBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 100;
        if (nearBottom) {
          setHidden(false);
          setProminent(true);
        } else {
          setProminent(false);
          setHidden(y > last.current && y > 50);
        }
        last.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = (active: boolean) => (active ? "active" : undefined);

  return (
    <div className={`menu-container${hidden ? " menu-hidden" : ""}${prominent ? " menu-prominent" : ""}`}>
      <div className="menu-box">
        <nav className="menu">
          <ul>
            <li><Link href="/" className={cls(pathname === "/")}>{site.name}</Link></li>
            <li className="separator" />
            <li><Link href="/articles" className={cls(pathname.startsWith("/articles"))}>articles</Link></li>
            <li><Link href="/learning" className={cls(pathname.startsWith("/learning"))}>learning</Link></li>
            <li className="separator" />
            <li><a href={socials.github} target="_blank" rel="noopener noreferrer">github</a></li>
            <li><a href={socials.leetcode} target="_blank" rel="noopener noreferrer">leetcode</a></li>
            <li><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></li>
            <li className="separator" />
            <li><a href={site.resume} target="_blank" rel="noopener noreferrer">resume</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
