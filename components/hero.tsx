"use client";

import Image from "next/image";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type MouseEvent, useState } from "react";
import heroWordmark from "@/assets/brand/hero-wordmark-connected-v2.png";
import zinfWordmark from "@/assets/brand/zinf-wordmark.png";
import heroPhoto from "@/assets/plates/hero-photo.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Story", href: "#story" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number, y = 28) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.78,
      delay: reduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <a className="skip-link" href="#main-content">跳到主要内容</a>

      <div className="hero-stage">
        <motion.div
          className="hero-media"
          initial={reduceMotion ? false : { opacity: 0.08, scale: 1.085, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1.05,
            delay: reduceMotion ? 0 : 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Image
            src={heroPhoto}
            alt="合成占位图：青年 AI Builder 在黑客松现场协作，发布前请替换为经授权的 Zinf 真实活动照片"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </motion.div>
        <motion.div
          className="hero-develop-wash"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: "-16%", scale: 1.04 }}
          animate={reduceMotion
            ? { opacity: 0 }
            : { opacity: [0, 0.46, 0], x: ["-16%", "6%", "0%"], scale: [1.04, 1.08, 1] }}
          transition={{ duration: reduceMotion ? 0 : 1.05, delay: reduceMotion ? 0 : 0.05, times: [0, 0.48, 1], ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="hero-copy">
          <motion.div
            className="infinity-track"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0.28 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.74, delay: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span /><span /><span />
          </motion.div>
          <div className="hero-reveal-mask">
            <motion.h1 id="hero-title" {...reveal(0.58, 34)}>
              WE GROW THE ONES<br />WHO DARE TO BEGIN.
            </motion.h1>
          </div>
          <div className="hero-reveal-mask">
            <motion.p {...reveal(0.72, 26)}>From first curiosity to a working Demo.</motion.p>
          </div>
          <div className="hero-reveal-mask">
            <motion.p className="hero-positioning" {...reveal(0.84, 20)}>让每一个年轻人，都有定义问题、动手创造 AI 的起点。</motion.p>
          </div>
        </div>

        <motion.div
          className="giant-wordmark-entrance"
          aria-hidden="true"
          initial={reduceMotion ? false : { y: "78%" }}
          animate={{ y: "0%" }}
          transition={{ duration: reduceMotion ? 0 : 1.18, delay: reduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="giant-wordmark">
            <Image className="giant-wordmark-image" src={heroWordmark} alt="" priority sizes="100vw" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToAnchor = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    const panel = target.closest<HTMLElement>(".chapter-panel");
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 68;
    const usesStickyPages = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    const measuredPanelTop = panel?.dataset.stackTop;
    const panelTop = measuredPanelTop === undefined ? panel?.offsetTop : Number(measuredPanelTop);
    const targetTop = href === "#top"
      ? 0
      : panel && panelTop !== undefined
        ? panelTop + target.offsetTop - (usesStickyPages ? 0 : headerHeight)
        : target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="site-header"
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.78, delay: reduceMotion ? 0 : 0.76, ease: [0.16, 1, 0.3, 1] }}
      >
        <a className="brand-mark" href="#top" aria-label="Zinf 首页" onClick={(event) => scrollToAnchor(event, "#top")}>
          <Image className="brand-logo-image" src={zinfWordmark} alt="" priority sizes="72px" />
        </a>
        <nav className="desktop-nav" aria-label="主要导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => scrollToAnchor(event, item.href)}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="join-button" href="#join" onClick={(event) => scrollToAnchor(event, "#join")}>
            <span>Join Zinf</span>
            <ArrowUpRight aria-hidden="true" size={17} weight="bold" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="移动端导航"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => scrollToAnchor(event, item.href)}>{item.label}</a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>

    </>
  );
}
