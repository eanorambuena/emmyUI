import { load } from "emmy-dom";
import "../components/Code.js";
import "../components/Hero.js";
import "../components/Gallery.js";
import "../components/Card.js";
import { code } from "../components/Code.js";

function CardPage() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    return /*html*/`
        <Hero
            title="Card component"
            subtitle="Component for displaying content in a card"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Card></Card>
            <Code language="html" copy="true">${code`<Card></Card>`}</Code>
        </main>
    `;
}

load(CardPage, 'CardPage');
