import { load } from "emmy-dom";
import "../components/Code.js";
import "../components/Hero.js";
import "../components/Gallery.js";
import "../components/Card.js";
import { code } from "../components/Code.js";

export function GalleryPage() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    return /*html*/`
        <Hero
            title="Gallery component"
            subtitle="Component to display a gallery of cards"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Gallery cols="2">
                <Card></Card>
                <Card></Card>
            </Gallery>
            <Code language="html" copy="true">${code`
<Gallery cols="2">
    <Card></Card>
    <Card></Card>
</Gallery>
                `}</Code>
        </main>
    `;
}

load(GalleryPage, 'GalleryPage');
