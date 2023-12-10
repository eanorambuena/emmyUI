import { load } from "emmy-dom";
import { path } from "../utils.js";
import "../components/Card.js";
import "../components/Gallery.js";
import "../components/Hero.js";
import "../components/Link.js";
import "../components/Stars.js";

const BASE = '/emmyUI';

const componentPath = path(`${BASE}/component`);

function Home() {
    this.className = 'flex flex-col my-[20%] md:my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    return /*html*/`
        <Hero
            title="EmmyUI component library"
            subtitle="A simple component library for EmmyUI, based on TailwindCSS + Flowbite"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Gallery>
                <Card title="Card" style="height: 100%;" href="${componentPath`card`}">
                    <Card style="height: 35%; font-size: 0.7rem;"></Card>
                </Card>
                <Card title="Gallery" style="height: 100%;" href="${componentPath`gallery`}">
                    <Gallery cols="2">
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                    </Gallery>
                </Card>
                <Card title="Stars" style="height: 100%;" href="${componentPath`stars`}">
                    <Stars number='3'></Stars>
                </Card>
                <Card title="Card" style="height: 100%;" href="${componentPath`card`}">
                    <Card style="height: 35%; font-size: 0.7rem;"></Card>
                </Card>
                <Card title="Stars" style="height: 100%;" href="${componentPath`stars`}">
                    <Stars number='3'></Stars>
                </Card>
                <Card title="Gallery" style="height: 100%;" href="${componentPath`gallery`}">
                    <Gallery cols="2" sm-cols="2">
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                    </Gallery>
                </Card>
            </Gallery>
        </main>
    `;
}

load(Home, 'Home');
