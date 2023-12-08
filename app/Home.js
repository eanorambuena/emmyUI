import { load } from "emmy-dom";
import "./components/Card.js";
import "./components/Code.js";
import "./components/Gallery.js";
import "./components/Hero.js";
import "./components/Stars.js";
import { PrepareCode } from "./components/Code.js";

function Home() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-[3rem]';

    const code = PrepareCode(/*javascript*/`
import { load } from "emmy-dom";
import "./components/Stars.js";

function Home() {
    this.className = 'flex flex-col justify-center items-center text-center w-full h-full';
    return /*html*/\`
        <h1 class="text-3xl font-bold">Bienvenido a juroQueFui</h1>
        <p class="text-xl">
            La plataforma de gestión de asistencia y tareas para ayudantes
        </p>
        <Stars_form></Stars_form>
    \`;
}`);

    console.log(code);

    return /*html*/`
        <Hero
            title="EmmyUI component library"
            subtitle="A simple component library for EmmyUI, based on TailwindCSS + Flowbite"
        ></Hero>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Gallery>
                <Card title="Card" style="height: 100%;">
                    <Card style="height: 35%; font-size: 0.7rem;"></Card>
                </Card>
                <Card title="Gallery" style="height: 100%;">
                    <Gallery cols="2" sm-cols="2" xl-cols="2">
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                    </Gallery>
                </Card>
                <Card title="Stars" style="height: 100%;">
                    <Stars number='3'></Stars>
                </Card>
                <Card title="Card" style="height: 100%;">
                    <Card style="height: 35%; font-size: 0.7rem;"></Card>
                </Card>
                <Card title="Stars" style="height: 100%;">
                    <Stars number='3'></Stars>
                </Card>
                <Card title="Gallery" style="height: 100%;">
                    <Gallery cols="2" sm-cols="2" xl-cols="2">
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                        <Card style="height: 70%; font-size: 0.7rem;"></Card>
                    </Gallery>
                </Card>
            </Gallery>
            
        </main>
    `;
}

load(Home, 'Home');
