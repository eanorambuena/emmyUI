import { load } from "emmy-dom";

function Hero() {
    this.className = "py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 border-b border-gray-200 dark:border-gray-700";
    let title = this.getAttribute("title") ?? "Hero";
    let subtitle = this.getAttribute("subtitle") ?? "Subtitle";

    return /*html*/ `
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            ${title}
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            ${subtitle}
        </p>
    `;
}

load(Hero, "Hero");
