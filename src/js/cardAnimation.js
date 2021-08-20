import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function cardFadeIn(elements) {
    gsap.fromTo(
        elements,
        {
            opacity: 0,
            y: "-100",
        },
        {
            y: 0,
            stagger: 0.1,
            ease: "back.out(1.7)",
            opacity: 1,
            duration: 1,
        }
    );
}

export function cardMoveIn(card1, card2, card3) {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        defaults: {
            ease: "back.out(1.7)",
            duration: 1,
        },
        scrollTrigger: {
            trigger: card1,
            start: "top bottom",
            scroller: "[data-scrollcontrol]",
            toggleActions: "play none none reset",
            // markers: true
        },
    });

    tl.fromTo(
        card1,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1 }
    );
    tl.fromTo(
        card2,
        { xPercent: -100, opacity: 0 },
        { xPercent: 70, opacity: 1 },
        ">-0.5"
    );
    tl.fromTo(
        card3,
        { xPercent: -100, opacity: 0 },
        { xPercent: 140, opacity: 1 },
        ">-0.5"
    );
}
