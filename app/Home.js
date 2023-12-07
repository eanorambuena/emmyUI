import { load } from "emmy-dom";
import "./components/Card.js";
import "./components/Code.js";
import "./components/Gallery.js";
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
        <h1 class="text-4xl font-bold">EmmyUI component library</h1>
        <p class="text-xl">
            La plataforma de gestión de asistencia y tareas para ayudantes
        </p>
        <main class="flex flex-col items-center w-[70%] h-fit gap-[3rem]">
            <Gallery>
                <Card title="Stars">
                    <Stars number='3'></Stars>
                </Card>
                <Card></Card>
                <Card></Card>
            </Gallery>
            
            <Code language="Javascript" copy="true">${code}</Code>
        </main>
    `;
}

load(Home, 'Home');
