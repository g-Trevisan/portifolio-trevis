import { useState } from "react";
import { flushSync } from "react-dom";
import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY } from "@/lib/theme";
import type { Theme } from "@/types/portfolio";

export type ThemeOrigin = { x: number; y: number };

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
}

function getCircleKeyframes(origin: ThemeOrigin): [string, string] {
  const { x, y } = origin;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  return [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function selectTheme(nextTheme: Theme, origin?: ThemeOrigin) {
    if (nextTheme === theme) return;

    const applyTheme = () => {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      setTheme(nextTheme);
    };

    if (!document.startViewTransition || prefersReducedMotion()) {
      applyTheme();
      return;
    }

    const [fromClip, toClip] = getCircleKeyframes(
      origin ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    );

    document
      .startViewTransition(() => {
        flushSync(applyTheme);
      })
      .ready.then(() => {
        document.documentElement.animate(
          { clipPath: [fromClip, toClip] },
          {
            duration: 600,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
  }

  return { theme, selectTheme };
}
