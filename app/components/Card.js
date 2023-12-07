import { load } from "emmy-dom";

function Card() {
    this.className = 'flex flex-col justify-center items-center w-full h-fit self-center justify-self-center';

    let href = this.getAttribute('href') ?? '#';
    let title = this.getAttribute('title') ?? 'Card title';
    let imgSrc = this.getAttribute('image');
    let useContent = !!this.innerHTML;
    let lightImgSrc = this.getAttribute('light-image') ?? imgSrc ?? 'https://placehold.co/600x400/FFFFFF/1F2937';
    let darkImgSrc = this.getAttribute('dark-image') ?? imgSrc ?? 'https://placehold.co/600x400/1F2937/FFF';

    return /*html*/`
        <a
            href="${href}"
            class="h-64 w-full bg-white rounded-lg border border-gray-100 hover:border-white dark:border-gray-800 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900"
        >
            <div class="bg-gray-50 dark:bg-gray-800 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <span class="text-base font-medium text-gray-900 dark:text-white">
                    ${title}
                </span>
                <span class="text-gray-500 dark:text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"></path>
                    </svg>
                </span>
            </div>
            <div class="flex justify-center items-center h-52">
                ${
                    useContent ? /*html*/`
                        <div class="relative h-4/6 w-full p-3 flex flex-col justify-center items-center">
                            ${this.innerHTML}
                        </div>
                    ` : /*html*/`
                        <div class="relative h-4/6 dark:hidden w-full">
                            <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                <img alt="Alerts" src="${lightImgSrc}" decoding="async" data-nimg="fill" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;">
                            </span>
                        </div>
                        <div class="hidden relative h-4/6 dark:block w-full">
                            <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                <img alt="Alerts" src="${darkImgSrc}" decoding="async" data-nimg="fill" class="w-56" sizes="100vw" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;">
                            </span>
                        </div>
                    `
                }
            </div>
        </a>
    `;
}

load(Card, 'Card');

