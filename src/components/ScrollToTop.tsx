"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`
        group fixed bottom-6 right-5 z-50
        flex h-12 w-12 items-center justify-center
        rounded-2xl
        border border-white/25
        bg-gradient-to-br from-indigo-500 to-violet-600
        text-white
        shadow-lg shadow-indigo-500/25
        cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:scale-105
        hover:from-indigo-600 hover:to-violet-700
        hover:shadow-xl hover:shadow-indigo-500/35
        active:translate-y-0 active:scale-95
        focus-visible:outline-none
        focus-visible:ring-4 focus-visible:ring-indigo-300
        focus-visible:ring-offset-2
        sm:bottom-8 sm:right-8
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-90 opacity-0"
        }
      `}
    >
      <ArrowUp
        size={22}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      <span
        className="
          pointer-events-none absolute right-full mr-3
          whitespace-nowrap rounded-lg
          bg-slate-900 px-3 py-2
          text-xs font-semibold text-white
          opacity-0 shadow-lg
          transition-opacity duration-200
          group-hover:opacity-100
        "
      >
        Back to top
      </span>
    </button>
  );
}
