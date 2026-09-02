"use client";

import { type ReactNode, useEffect } from "react";

type ChapterPanelProps = {
  children: ReactNode;
  order: number;
  scrollMode?: "converge";
  tone: "hero" | "ink" | "surface" | "footer";
};

const HERO_SCROLL_FACTOR_DESKTOP = 2.2;
const HERO_SCROLL_FACTOR_COMPACT = 2;
const CONVERGE_DWELL_END = 0.25;
const CONVERGE_MOTION_END = 0.8;

export function ChapterPanel({ children, order, scrollMode, tone }: ChapterPanelProps) {
  const resolvedScrollMode = scrollMode ?? (order === 1 ? "lift" : order === 2 ? "read" : undefined);

  return (
    <div
      className="chapter-panel"
      data-order={order}
      data-scroll-mode={resolvedScrollMode}
      data-tone={tone}
      data-stack-state={order === 1 ? "next" : "future"}
      style={{ zIndex: order + 10 }}
    >
      <div className="chapter-shadow" aria-hidden="true" />
      {children}
    </div>
  );
}

/**
 * Coordinates the hero wordmark lift and native sticky chapter stacking.
 * One passive scroll listener replaces per-element observers.
 */
export function ChapterStackController() {
  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".chapter-panel"));
    const stickyPages = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const liftMotion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const hero = document.querySelector<HTMLElement>(".hero");
    const heroStage = hero?.querySelector<HTMLElement>(".hero-stage");
    const heroWordmark = hero?.querySelector<HTMLElement>(".giant-wordmark");
    const heroWordmarkEntrance = hero?.querySelector<HTMLElement>(".giant-wordmark-entrance");
    const liftPanel = document.querySelector<HTMLElement>('[data-scroll-mode="lift"]');
    const liftMarker = liftPanel?.querySelector<HTMLElement>(".section-index");
    const convergePanels = panels.filter((panel) => panel.dataset.scrollMode === "converge");
    const scrubPanels = panels.filter((panel) => panel.querySelector(".manifesto-scrub"));

    let panelTops: number[] = [];
    let activeIndex = Number.NaN;
    let animationFrame = 0;
    let heroTop = 0;
    let heroRange = 1;
    let heroLiftDistance = 0;
    let liftTop = 0;
    let liftRange = 1;
    let liftDistance = 0;
    let convergeMeasurements: Array<{
      panel: HTMLElement;
      range: number;
      top: number;
      travel: number;
    }> = [];
    let scrubMeasurements: Array<{
      blocks: HTMLElement[];
      panel: HTMLElement;
      range: number;
      top: number;
    }> = [];

    const resetScrubText = () => {
      scrubPanels.forEach((panel) => {
        panel.style.removeProperty("--manifesto-scrub-y");
        panel.style.removeProperty("--scrub-progress");
        panel.querySelectorAll<HTMLElement>("[data-scrub-block]").forEach((block) => {
          block.style.removeProperty("--scrub-block-progress");
        });
      });
      delete document.body.dataset.scrubTextReady;
    };

    const resetConverge = () => {
      convergePanels.forEach((panel) => {
        panel.style.removeProperty("--journey-converge-left-x");
        panel.style.removeProperty("--journey-converge-right-x");
        panel.style.removeProperty("--journey-converge-scale");
        panel.style.removeProperty("--journey-converge-opacity");
      });
      delete document.body.dataset.journeyConvergeReady;
    };

    const clearManagedState = () => {
      panels.forEach((panel) => {
        panel.removeAttribute("data-stack-state");
        panel.removeAttribute("inert");
      });
      delete document.body.dataset.chapterStackActive;
      activeIndex = Number.NaN;
    };

    const renderState = (nextActiveIndex: number) => {
      if (nextActiveIndex === activeIndex) return;
      activeIndex = nextActiveIndex;

      panels.forEach((panel, index) => {
        const state = index < activeIndex
          ? "dormant"
          : index === activeIndex
            ? "current"
            : index === activeIndex + 1
              ? "next"
              : "future";

        panel.dataset.stackState = state;
        if (state === "dormant") panel.setAttribute("inert", "");
        else panel.removeAttribute("inert");
      });

      document.body.dataset.chapterStackActive = String(activeIndex >= 0);
    };

    const update = () => {
      animationFrame = 0;

      if (hero && heroWordmark && liftMotion.matches) {
        const heroProgress = Math.min(1, Math.max(0, (window.scrollY - heroTop) / heroRange));
        heroWordmark.style.setProperty(
          "--hero-wordmark-y",
          `${-(heroProgress * heroLiftDistance).toFixed(2)}px`,
        );
      } else {
        heroWordmark?.style.removeProperty("--hero-wordmark-y");
      }

      if (liftPanel && liftMotion.matches) {
        const liftProgress = Math.min(1, Math.max(0, (window.scrollY - liftTop) / liftRange));
        liftPanel.style.setProperty(
          "--chapter-lift-y",
          `${-(liftProgress * liftDistance).toFixed(2)}px`,
        );
      } else {
        liftPanel?.style.removeProperty("--chapter-lift-y");
      }

      if (liftMotion.matches) {
        document.body.dataset.scrubTextReady = "true";

        scrubMeasurements.forEach(({ blocks, panel, range, top }) => {
          const progress = Math.min(1, Math.max(0, (window.scrollY - top) / range));
          const englishProgress = Math.min(1, progress * 1.35 + 0.08);
          const translationProgress = Math.min(1, Math.max(0, (progress - 0.42) * 1.72));

          blocks[0]?.style.setProperty("--scrub-block-progress", englishProgress.toFixed(4));
          blocks[1]?.style.setProperty("--scrub-block-progress", translationProgress.toFixed(4));

          if (panel.dataset.scrollMode === "read") {
            panel.style.setProperty(
              "--manifesto-scrub-y",
              `${(32 - progress * 76).toFixed(2)}px`,
            );
          }
        });

        if (convergeMeasurements.length > 0) {
          document.body.dataset.journeyConvergeReady = "true";

          convergeMeasurements.forEach(({ panel, range, top, travel }) => {
            const rawProgress = Math.min(1, Math.max(0, (window.scrollY - top) / range));
            const motionProgress = rawProgress <= CONVERGE_DWELL_END
              ? 0
              : rawProgress < CONVERGE_MOTION_END
                ? (rawProgress - CONVERGE_DWELL_END)
                  / (CONVERGE_MOTION_END - CONVERGE_DWELL_END)
                : 1;
            const easedProgress = motionProgress * (2 - motionProgress);
            const remainingTravel = travel * (1 - easedProgress);

            panel.style.setProperty(
              "--journey-converge-left-x",
              `${-remainingTravel.toFixed(2)}px`,
            );
            panel.style.setProperty(
              "--journey-converge-right-x",
              `${remainingTravel.toFixed(2)}px`,
            );
            panel.style.setProperty(
              "--journey-converge-scale",
              (0.7 + easedProgress * 0.3).toFixed(4),
            );
            panel.style.setProperty(
              "--journey-converge-opacity",
              (0.68 + easedProgress * 0.32).toFixed(4),
            );
          });
        }
      } else {
        resetScrubText();
        resetConverge();
      }

      if (!stickyPages.matches) return;

      const scrollPosition = window.scrollY + 1;
      let low = 0;
      let high = panelTops.length - 1;
      let nextActiveIndex = -1;

      while (low <= high) {
        const middle = (low + high) >> 1;
        if (panelTops[middle] <= scrollPosition) {
          nextActiveIndex = middle;
          low = middle + 1;
        } else {
          high = middle - 1;
        }
      }

      renderState(nextActiveIndex);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    const measure = () => {
      const main = document.getElementById("main-content");

      if (hero && heroStage && heroWordmarkEntrance && liftMotion.matches) {
        let wordmarkTop = 0;
        let currentElement: HTMLElement | null = heroWordmarkEntrance;

        while (currentElement && currentElement !== heroStage) {
          wordmarkTop += currentElement.offsetTop;
          currentElement = currentElement.offsetParent as HTMLElement | null;
        }

        heroLiftDistance = Math.max(0, wordmarkTop);
        const heroScrollFactor = window.innerWidth >= 768
          ? HERO_SCROLL_FACTOR_DESKTOP
          : HERO_SCROLL_FACTOR_COMPACT;
        const heroScrollDistance = Math.ceil(heroLiftDistance * heroScrollFactor);
        hero.style.setProperty("--hero-scroll-distance", `${heroScrollDistance}px`);
      } else {
        hero?.style.removeProperty("--hero-scroll-distance");
        heroLiftDistance = 0;
      }

      heroTop = 0;
      let currentHeroElement: HTMLElement | null = hero ?? null;
      while (currentHeroElement) {
        heroTop += currentHeroElement.offsetTop;
        currentHeroElement = currentHeroElement.offsetParent as HTMLElement | null;
      }
      heroRange = Math.max(1, (hero?.offsetHeight ?? window.innerHeight) - window.innerHeight);

      let naturalTop = (main?.offsetTop ?? 0) + (hero?.offsetHeight ?? 0);
      panelTops = panels.map((panel) => {
        const panelStyles = window.getComputedStyle(panel);
        naturalTop += Number.parseFloat(panelStyles.marginTop) || 0;
        const panelTop = naturalTop;
        naturalTop += panel.offsetHeight + (Number.parseFloat(panelStyles.marginBottom) || 0);
        return panelTop;
      });
      panels.forEach((panel, index) => {
        panel.dataset.stackTop = String(panelTops[index]);
      });

      scrubMeasurements = scrubPanels.map((panel) => {
        const panelIndex = panels.indexOf(panel);
        const blocks = Array.from(panel.querySelectorAll<HTMLElement>("[data-scrub-block]"));

        return {
          blocks,
          panel,
          top: panelIndex >= 0 ? panelTops[panelIndex] : 0,
          range: Math.max(1, panel.offsetHeight - window.innerHeight),
        };
      });

      if (liftPanel) {
        const liftIndex = panels.indexOf(liftPanel);
        liftTop = liftIndex >= 0 ? panelTops[liftIndex] : 0;
        liftRange = Math.max(1, liftPanel.offsetHeight - window.innerHeight);

        if (liftMarker) {
          let markerTop = 0;
          let currentElement: HTMLElement | null = liftMarker;

          while (currentElement && currentElement !== liftPanel) {
            markerTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent as HTMLElement | null;
          }

          const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 68;
          liftDistance = Math.max(0, markerTop - headerHeight - 24);
        }
      }

      convergeMeasurements = convergePanels.map((panel) => {
        const convergeIndex = panels.indexOf(panel);
        const title = panel.querySelector<HTMLElement>(".journey-converge-title");
        const titleParts = title
          ? Array.from(title.querySelectorAll<HTMLElement>("span"))
          : [];
        const titlePartsWidth = titleParts.reduce((width, part) => width + part.offsetWidth, 0);

        return {
          panel,
          top: convergeIndex >= 0 ? panelTops[convergeIndex] : 0,
          range: Math.max(1, panel.offsetHeight - window.innerHeight),
          travel: title ? Math.max(0, (title.clientWidth - titlePartsWidth) / 2) : 0,
        };
      });

      if (!stickyPages.matches) {
        clearManagedState();
      } else {
        activeIndex = Number.NaN;
      }

      update();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    stickyPages.addEventListener("change", measure);
    liftMotion.addEventListener("change", measure);
    document.fonts.ready.then(measure);
    measure();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      stickyPages.removeEventListener("change", measure);
      liftMotion.removeEventListener("change", measure);
      hero?.style.removeProperty("--hero-scroll-distance");
      heroWordmark?.style.removeProperty("--hero-wordmark-y");
      liftPanel?.style.removeProperty("--chapter-lift-y");
      resetScrubText();
      resetConverge();
      panels.forEach((panel) => panel.removeAttribute("data-stack-top"));
      clearManagedState();
    };
  }, []);

  return null;
}
