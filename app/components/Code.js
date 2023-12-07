import { load } from "emmy-dom";

export function PrepareCode(code) {
    return code
        .trim()
        .replace(/    /, "\t")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function Code () { 
    this.className = 'text-left rounded-md flex flex-col justify-center items-center w-[70%] bg-gray-100 dark:bg-gray-800 text-clip';

    this.callback = () => {
        if (this.getAttribute('copy') === 'true') {
            this.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    const code = e.target.parentNode.querySelector('pre code');
                    navigator.clipboard.writeText(code.innerText);
                }
            });
        }
    };

    return () => /*html*/`
        <div class="grid w-full grid-cols-2 border-b border-gray-200 bg-gray-50 rounded-b-none rounded-t-md dark:bg-gray-700 dark:border-gray-600">
            <ul class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li>
                    <span class="inline-block w-full p-2 px-3 text-gray-800 bg-gray-100 rounded-tl-md border-r border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">
                        ${this.getAttribute('language')}
                    </span>
                </li>
            </ul>
            ${
                this.getAttribute('copy') === 'true' ? /*html*/`
                    <div class="flex justify-end">
                        <button type="button" data-copy-state="copy" class="flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white rounded-tr-md">
                            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
                                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
                            </svg>
                            <span class="copy-text">Copy</span>
                        </button>
                    </div>
                `
                : ''
            }
        </div>
        <div class="overflow-auto bg-gray-100 dark:bg-gray-800 rounded-t-none rounded-b-md p-4 dark:text-gray-400 w-full h-fit">
            <pre>
                <code class="h-fit">${this.innerHTML}</code>
            </pre>
        </div>
    `;
    }

load(Code, 'Code');
