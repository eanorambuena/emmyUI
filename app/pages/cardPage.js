import { load } from "emmy-dom";
import "../components/Code.js";
import "../components/Hero.js";
import "../components/Gallery.js";
import "../components/Card.js";
import { PrepareCode } from "../components/Code.js";

function CardPage() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    const code = PrepareCode(/*html*/`<Card></Card>`);

    console.log(code);

    return /*html*/`
        <Hero
            title="Gallery component"
            subtitle="Component to display a gallery of cards"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Card></Card>
            <Code language="html" copy="true">${code}</Code>
        </main>
    `;
}

load(CardPage, 'CardPage');
