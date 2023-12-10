import { load } from "emmy-dom";
import "./components/Link.js";
import "./components/Nav.js";
import "./components/Main.js";
import "./pages/home.js";
import "./pages/cardPage.js";
import "./pages/galleryPage.js";
import "./pages/starsPage.js";

const BASE = '/emmyUI';

load(`${BASE}/code404.html`, 'Code404');

function App () {
  this.behave('div');
  this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full max-w-full overflow-x-hidden h-fit';

  return /*html*/`
    <Nav
      base="${BASE}"
      brand="EmmyUI"
      brand-href="${BASE}/"
      brand-img="https://emmyjs.github.io/logo.png"
      cta="Learn More About Emmy.js"
      cta-href="https://emmyjs.github.io"
    >
      <Link href="" to="home"></Link>
      <Link href="/">Home</Link>
      <Link href="/component/card" to="cardPage">Card</Link>
      <Link href="/component/gallery" to="galleryPage">Gallery</Link>
      <Link href="/component/stars" to="starsPage">Stars</Link>
    </Nav>
    <Main></Main>
  `;
}

load(App, 'App');
