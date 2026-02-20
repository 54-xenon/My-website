document.addEventListener("DOMContentLoaded", () => {
    const mobileWidth = 768;

    document.querySelectorAll("header").forEach((header) => {
        const toggleButton = header.querySelector(".nav-toggle");
        const siteNav = header.querySelector(".site-nav");

        if (!toggleButton || !siteNav) {
            return;
        }

        const closeMenuIfDesktop = () => {
            if (window.innerWidth > mobileWidth) {
                siteNav.classList.remove("is-open");
                toggleButton.setAttribute("aria-expanded", "false");
            }
        };

        toggleButton.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            toggleButton.setAttribute("aria-expanded", String(isOpen));
        });

        window.addEventListener("resize", closeMenuIfDesktop);
    });
});
