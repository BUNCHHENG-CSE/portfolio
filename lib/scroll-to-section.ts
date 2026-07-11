import { MouseEvent } from "react";

export const scrollToSection = (id: string, e?: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement> | globalThis.MouseEvent) => {
    if (e) {
        e.preventDefault();
    }

    const targetId = id.startsWith("#") ? id.substring(1) : id;

    if (!targetId || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const element = document.getElementById(targetId);
    if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};
