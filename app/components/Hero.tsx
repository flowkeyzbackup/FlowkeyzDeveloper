"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { profile } from "../lib/data"

const ease = [0.22, 1, 0.36, 1] as const;

const words: { text: string; accent?: boolean }[] = [
  { text: "I" },
  { text: "build" },
  { text: "products" },
  { text: "across" },
  { text: "web," },
  { text: "mobile" },
  { text: "and" },
  { text: "real-time,", accent: true },
  { text: "then" },
  { text: "teach" },
  { text: "people" },
  { text: "how." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
});

export default function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  return (
    <div className="grid gap-7 pb-14 pt-12 sm:pt-20">
      <motion.p
        initial={initial}
        animate="show"
        variants={fadeUp(0)}
        className="font-mono text-[13px] uppercase tracking-wider text-muted"
      >
        {profile.role} · {profile.years} years
      </motion.p>

      <motion.h1
        initial={initial}
        animate="show"
        variants={container}
        className="font-display text-[clamp(2.6rem,8vw,5.2rem)] font-extrabold leading-[0.98] tracking-tight text-balance"
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className={`mr-[0.25em] inline-block ${w.accent ? "text-accent" : ""}`}
          >
            {w.text}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={initial}
        animate="show"
        variants={fadeUp(0.9)}
        className="max-w-[56ch] text-xl text-muted"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={initial}
        animate="show"
        variants={fadeUp(1.05)}
        className="flex flex-wrap gap-3"
      >
        <a
          href="#contact"
          className="rounded-md border border-accent bg-accent px-5 py-3 text-[15px] font-semibold text-accent-fg transition hover:brightness-110"
        >
          Work with me
        </a>
        <a
          href="#mentoring"
          className="rounded-md border border-fg px-5 py-3 text-[15px] font-semibold transition hover:bg-surface"
        >
          Book a mentoring session
        </a>
      </motion.div>
    </div>
  );
}