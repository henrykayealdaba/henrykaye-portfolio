import gsap from "gsap";

export const fadeIn = (target: Element | string | null, delay = 0) => {
  return gsap.to(target, {
    xPercent: 100,
    duration: 0.5,
    rotation: 360,
    delay: delay,
  });
};
