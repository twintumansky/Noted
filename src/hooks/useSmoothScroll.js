import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = (containerRef) => {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchInertiaMultiplier: 2,
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Only observe size changes that affect scrolling
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry.contentRect.height !== entry.target.scrollHeight) {
        lenis.resize();
      }
    });

    observer.observe(containerRef.current);

    return () => {
      lenis.destroy();
      observer.disconnect();
      setLenisInstance(null);
    };
  }, [containerRef]);

  const scrollToElement = (element, options = {}) => {
    if (!lenisInstance || !element) return;

    const defaultOptions = {
      immediate: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    lenisInstance.scrollTo(element, { ...defaultOptions, ...options });
  };

  const scrollToNewElement = (element, containerRect, options = {}) => {
    if (!lenisInstance || !element) return;

    const elementRect = element.getBoundingClientRect();
    const visibleHeight = containerRect.bottom - elementRect.top;
    const visibilityPercentage = (visibleHeight / elementRect.height) * 100;

    if (visibilityPercentage < 80) {
      const bottomOffset = -Math.max(32, containerRect.height * 0.05);
      scrollToElement(element, { ...options, offset: bottomOffset });
    }
  };

  return {
    lenisInstance,
    scrollToElement,
    scrollToNewElement
  };
};

export default useSmoothScroll;
