import { build } from "emmy-dom/dist/server.js";
import { App, $App } from "./app/App.js";
import { CardPage } from "./app/pages/cardPage.js";
import { GalleryPage } from "./app/pages/galleryPage.js";
import { Home } from "./app/pages/home.js";
import { StarsPage } from "./app/pages/starsPage.js";
import { Card } from "./app/components/Card.js";
import { Code } from "./app/components/Code.js";
import { Gallery } from "./app/components/Gallery.js";
import { Hero } from "./app/components/Hero.js";
import { Link } from "./app/components/Link.js";
import { Nav } from "./app/components/Nav.js";
import { Star } from "./app/components/Star.js";
import { Stars } from "./app/components/Stars.js";

build({
  app: $App,
  dependencies: /*javascript*/`
    import { load, html, Router } from 'emmy-dom';
  `,
  generators: {
    App: App, CardPage, GalleryPage, Home, StarsPage, Card, Code,
    Gallery, Hero, Link, Nav, Star, Stars
  },
  template: './template.html'
});
