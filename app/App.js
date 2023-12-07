import { load } from "emmy-dom";
import "./components/Nav.js";
import "./components/Main.js";
import "./Home.js";

const BASE = '/emmyUI';

load(`${BASE}/About.html`, 'About');
load(`${BASE}/Contact.html`, 'Contact');
load(`${BASE}/Code404.html`, 'Code404');

function App () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full max-w-full overflow-x-hidden h-fit';

  return /*html*/`
    <Nav
      base="${BASE}"
      img="https://flowbite.com/docs/images/logo.svg"
      brand="Flowbite"
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Nav>
    <Main></Main>
  `;
}

load(App, 'App');
