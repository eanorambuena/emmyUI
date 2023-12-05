import { load } from "emmy-dom";

function TextArea () {
  this.behave('section');
  this.className = 'w-full h-32';

  return () => /*html*/`
    <textarea class="${this.className}"></textarea>
  `;
}

load(TextArea, 'TextArea');
