import { load } from "emmy-dom";
import "../components/Code.js";
import "../components/Hero.js";
import "../components/Stars.js";
import { code } from "../components/Code.js";

export function StarsPage() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    return /*html*/`
        <Hero
            title="Stars component"
            subtitle="Rating component"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Stars number='3'></Stars>
            <Code language="html" copy="true">${code`<Stars number='3'></Stars>`}</Code>
        </main>
    `;
}

load(StarsPage, 'StarsPage');
