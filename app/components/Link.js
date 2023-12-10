import { load } from "emmy-dom";

function Link() {
	let href = this.getAttribute('href');
	let text = this.innerText;
	let to = this.getAttribute('to') ?? text;
	let className = this.getAttribute('class') ?? 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

	return /*html*/`
		<a
			emmy-link
			href="${href}"
			class="${className}"
			onclick="window.route(event)"
			to="${to}"
		>
			${text}
		</a>
	`;
}

load(Link, 'Link');
