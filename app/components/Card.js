import { load } from "emmy-dom";
import "./Link.js";

function Card() {
    this.className = 'flex flex-col justify-center items-center grow w-full h-fit self-center justify-self-center';

    let href = this.getAttribute('href') ?? '#';
    let title = this.getAttribute('title') ?? 'Card title';
    let imgSrc = this.getAttribute('image');
    let imgAlt = this.getAttribute('image-alt') ?? 'Card image';
    let useContent = !!this.innerHTML;
    let lightImgSrc = this.getAttribute('light-image') ?? imgSrc ?? 'https://placehold.co/300x200/FFFFFF/1F2937';
    let darkImgSrc = this.getAttribute('dark-image') ?? imgSrc ?? 'https://placehold.co/300x200/1F2937/FFF';

    return /*html*/`
        <a
            href="${href}"
            class="flex flex-col grow block self-center justify-self-center w-full h-fit bg-white rounded-lg border border-gray-100 hover:border-white dark:border-gray-800 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900"
        >
            <div class="bg-gray-50 dark:bg-gray-800 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <span class="font-medium text-gray-900 dark:text-white">
                    ${title}
                </span>
                <span class="text-gray-500 dark:text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"></path>
                    </svg>
                </span>
            </div>
            ${
                useContent ? /*html*/`
                    <div class="flex flex-col justify-center items-center grow p-3">
                        ${this.innerHTML}
                    </div>
                ` : /*html*/`
                    <div class="flex flex-col justify-center items-center grow  p-3 dark:hidden">
                        <img alt="${imgAlt}" src="${lightImgSrc}" decoding="async" class="w-full h-auto block">
                    </div>
                    <div class="flex flex-col justify-center items-center grow p-3 hidden dark:block">
                        <img alt="${imgAlt}" src="${darkImgSrc}" decoding="async" class="w-full h-auto">
                    </div>
                `
            }
        </a>
    `;
}

load(Card, 'Card');

