"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "@phosphor-icons/react";
import { stories } from "@/data/site-content";

const STORY_SCRUBBER_MAX = 1000;

function getStoryAnimation(track: HTMLElement | null) {
  return track?.getAnimations()[0];
}

function getAnimationDuration(animation: Animation | undefined) {
  return Number(animation?.effect?.getComputedTiming().duration ?? 0);
}

function updateScrubberPosition(input: HTMLInputElement | null, progress: number) {
  if (!input) return;

  const normalizedProgress = Math.min(0.999, Math.max(0, progress));
  input.value = String(Math.round(normalizedProgress * STORY_SCRUBBER_MAX));
  input.style.setProperty("--story-progress", `${(normalizedProgress * 100).toFixed(2)}%`);
}

type StoryItemsProps = {
  duplicate?: boolean;
  onImageEnter: () => void;
  onImageLeave: () => void;
};

function StoryItems({ duplicate = false, onImageEnter, onImageLeave }: StoryItemsProps) {
  return stories.map((story, index) => (
    <article
      className={`event-item event-item-${(index % 3) + 1}`}
      key={`${duplicate ? "duplicate" : "story"}-${story.name}`}
      aria-hidden={duplicate || undefined}
    >
      <div
        className="event-image"
        onMouseEnter={onImageEnter}
        onMouseLeave={onImageLeave}
      >
        <Image
          src={story.media.src}
          alt={duplicate ? "" : story.media.alt}
          fill
          sizes="(max-width: 767px) 82vw, 40vw"
        />
      </div>
      <div className="event-copy">
        <span>0{index + 1}</span>
        <h3>{story.name}</h3>
        <p>{story.date} · {story.city}</p>
        <p>{story.outcome}</p>
      </div>
    </article>
  ));
}

export function StoryMarquee() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrubberRef = useRef<HTMLInputElement>(null);
  const scrubberDescriptionId = useId();
  const [isPaused, setIsPaused] = useState(false);

  const setPlaybackRate = (rate: number) => {
    const animation = getStoryAnimation(trackRef.current);
    animation?.updatePlaybackRate(rate);
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const syncPageVisibility = () => {
      gallery.dataset.pageVisible = String(document.visibilityState === "visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        gallery.dataset.inView = String(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    syncPageVisibility();
    observer.observe(gallery);
    document.addEventListener("visibilitychange", syncPageVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPageVisibility);
    };
  }, []);

  useEffect(() => {
    const input = scrubberRef.current;
    let isScrubbing = false;

    const seekToInputValue = () => {
      if (!input) return;

      const animation = getStoryAnimation(trackRef.current);
      const duration = getAnimationDuration(animation);
      if (!animation || duration <= 0) return;

      const progress = Math.min(
        0.999,
        Math.max(0, Number(input.value) / STORY_SCRUBBER_MAX),
      );
      animation.currentTime = duration * progress;
      updateScrubberPosition(input, progress);
    };

    const syncScrubber = () => {
      if (isScrubbing) return;

      const animation = getStoryAnimation(trackRef.current);
      const duration = getAnimationDuration(animation);
      if (!animation || duration <= 0) return;

      const currentTime = Number(animation.currentTime ?? 0);
      const progress = ((currentTime % duration) + duration) % duration / duration;
      updateScrubberPosition(scrubberRef.current, progress);
    };

    const startScrubbing = () => {
      isScrubbing = true;
    };

    const stopScrubbing = () => {
      isScrubbing = false;
      syncScrubber();
    };

    input?.addEventListener("input", seekToInputValue);
    input?.addEventListener("pointerdown", startScrubbing);
    window.addEventListener("pointerup", stopScrubbing);
    syncScrubber();
    const syncTimer = window.setInterval(syncScrubber, 100);

    return () => {
      input?.removeEventListener("input", seekToInputValue);
      input?.removeEventListener("pointerdown", startScrubbing);
      window.removeEventListener("pointerup", stopScrubbing);
      window.clearInterval(syncTimer);
    };
  }, []);

  return (
    <div className={`story-marquee${isPaused ? " is-paused" : ""}`}>
      <div className="story-marquee-toolbar">
        <button
          className="story-marquee-control"
          type="button"
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {isPaused ? <Play size={14} weight="fill" /> : <Pause size={14} weight="fill" />}
          <span>{isPaused ? "继续播放" : "暂停播放"}</span>
        </button>
      </div>

      <div className="event-gallery" ref={galleryRef}>
        <div className="event-track" ref={trackRef}>
          <div className="event-group">
            <StoryItems
              onImageEnter={() => setPlaybackRate(0.5)}
              onImageLeave={() => setPlaybackRate(1)}
            />
          </div>
          <div className="event-group" aria-hidden="true">
            <StoryItems
              duplicate
              onImageEnter={() => setPlaybackRate(0.5)}
              onImageLeave={() => setPlaybackRate(1)}
            />
          </div>
        </div>
      </div>

      <div className="story-marquee-scrubber">
        <input
          className="story-scrubber-range"
          ref={scrubberRef}
          type="range"
          min="0"
          max={STORY_SCRUBBER_MAX}
          step="1"
          defaultValue="0"
          aria-label="故事墙浏览位置"
          aria-describedby={scrubberDescriptionId}
        />
        <span
          className="story-scrubber-status"
          id={scrubberDescriptionId}
          aria-live="polite"
        >
          {isPaused ? "拖动回看 · 已暂停" : "拖动定位 · 自动播放中"}
        </span>
      </div>
    </div>
  );
}
