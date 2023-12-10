import { load } from "emmy-dom";
import "./Link.js";

function Nav() {
	let basePath = this.getAttribute('base') ?? '';
	let brandText = this.getAttribute('brand');
	let brandHref = this.getAttribute('brand-href') ?? '#';
	let brandImg = this.getAttribute('brand-img');
	let callToActionText = this.getAttribute('cta') ?? 'Get Started';
	let callToActionHref = this.getAttribute('cta-href') ?? '#';
	let callToActionTarget = this.getAttribute('cta-target') ?? '_self';
	let callToActionClass = this.getAttribute('cta-class') ?? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

	const [hidden, setHidden] = this.useState(true);

	this.callback = () => {
		const $menu = this.querySelector('#navbar-sticky');
		const $button = this.querySelector('[data-collapse-toggle]');

		const isClickOutside = (target) => {
			if ($menu.contains(target)) return false;
			let menuHeight = $menu.offsetHeight;
			return target.offsetTop > menuHeight;
		}

		const toggleHidden = () => {
			setHidden(!hidden());
		};

		$button.addEventListener('click', toggleHidden);

		document.addEventListener('click', (event) => {
			if (!hidden() && isClickOutside(event.target)) {
				toggleHidden();
				this.rerender(); // document is not tracked by useEffect, so we need to rerender manually
			}
		});

		this.querySelectorAll('[emmy-link]').forEach(($anchor) => {
			let href = $anchor.getAttribute('href');
			$anchor.setAttribute('href', basePath + href);
			let to = $anchor.getAttribute('to') ?? $anchor.innerText;

			let $route = document.createElement('emmy-route');
			$route.setAttribute('href', basePath + href);
			$route.setAttribute('to', to);
			this.appendChild($route);
		});
	};

	this.useEffect(() => {
		const $menu = this.querySelector('#navbar-sticky');
		const $button = this.querySelector('[data-collapse-toggle]');

		$button.setAttribute('aria-expanded', hidden());
		$menu.setAttribute('aria-expanded', hidden());
		$menu.classList = hidden() ? 'hidden' : 'w-full md:block md:w-auto shadow-lg md:shadow-none';
	}, [hidden]);

	return /*html*/`
		<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="${brandHref}" class="flex items-center space-x-3 rtl:space-x-reverse">
					${
						brandImg ? `<img src="${brandImg}" class="h-8" alt="Flowbite Logo">` : ''
					}
					${
						brandText ? `<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">${brandText}</span>` : ''
					}
				</a>
				<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<a href="${callToActionHref}" target=${callToActionTarget} class="${callToActionClass} hidden md:block">
						${callToActionText}
					</a>
					<button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
						</svg>
					</button>
				</div>
				<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
					<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						${
							this.innerHTML
						}
					</ul>
				</div>
			</div>
		</nav>
	`;
}

load(Nav, 'Nav');
