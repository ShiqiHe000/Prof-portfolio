import { gsap } from "gsap";

export function shufflePics(picContainer, researchList, activeClass) {
    const list = researchList.querySelectorAll("li");
    let previousActiveList = list[0];

    list.forEach((item) => {
        item.addEventListener("mouseover", () => {

            previousActiveList.classList.remove(activeClass);

            item.classList.add(activeClass);
            previousActiveList = item;

            const picName = item.dataset.name;

            const shiftPic = picContainer.querySelector(`[data-${picName}]`);

            const lastPic = picContainer.lastChild;

            if (shiftPic === lastPic) return;

            gsap.to(lastPic, {
                opacity: 0,
                scaleX: 0.8,
                scaleY: 0.8,
            });
            picContainer.appendChild(shiftPic);

            gsap.fromTo(
                shiftPic,
                {
                    opacity: 0,
                    scaleX: 0.8,
                    scaleY: 0.8,
                },
                {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                }
            );
        });
    });
}
