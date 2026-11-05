import React, { useEffect, useRef } from 'react';

interface LoopVideoProps {
  /** file name inside /public/videos, without extension, e.g. "espresso-machine" */
  name: string;
  label: string;
  className?: string;
}

/**
 * Muted, looping clip with a poster frame.
 * It only loads and plays while it is on screen (saves mobile data and battery),
 * and stays on the still poster for visitors who prefer reduced motion.
 */
export const LoopVideo: React.FC<LoopVideoProps> = ({ name, label, className }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay can be blocked (e.g. low-power mode) — poster stays visible */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={`/videos/${name}.mp4`}
      poster={`/videos/${name}.jpg`}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  );
};
