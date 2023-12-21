import { load } from "emmy-dom/dist/server.js";
import './Star.js';

export function Stars() {
  this.className = 'flex items-center inline';
  const number = Number.parseFloat(this.getAttribute('number'));
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += /*html*/`
      <Star active="${i < Math.round(number - 0.25)}"></Star>
    `;
  }

  return /*html*/`
    ${stars}
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">${number}</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">estrellas de</p>
    <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
  `;
}

load(Stars, 'Stars');

export function Stars_form() {
  this.className = 'flex items-center inline';
  const number = Number.parseFloat(this.getAttribute('number'));
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += /*html*/`
      <Star active="${i < Math.round(number - 0.25)}"></Star>
    `;
  }

  this.callback = () => {
    const input = this.querySelector('input');
    input.value = number;
    const stars = this.querySelectorAll('emmy-star');
    stars.forEach(star => star.setAttribute('active', 'false'));
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        input.value = index + 1;
        stars.forEach((star, i) => {
          star.setAttribute('active', i <= index);
          star.innerHTML = /*html*/`
            <svg class="w-4 h-4 me-1 ${ i <= index ? 'text-yellow-500' : 'text-gray-500' }" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          `;
        });
      });
    });
  };

  return /*html*/`
    <input type="number" id="stars" name="review[stars]" min="1" max="5" required hidden>
    ${stars}
  `;
}

load(Stars_form, 'Stars_form');
