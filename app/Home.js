import { load } from "emmy-dom";
import "./components/Stars.js";
import "./components/Code.js";
import { PrepareCode } from "./components/Code.js";

function Home() {
    this.className = 'flex flex-col my-[10%] items-center text-center w-full h-fit gap-4';

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
        <h1 class="text-3xl font-bold">Bienvenido a juroQueFui</h1>
        <p class="text-xl my-5">
            La plataforma de gestión de asistencia y tareas para ayudantes
        </p>
        <Stars_form></Stars_form>
        <Code
            language="Javascript"
            copy="true"
        >
            ${code}
        </Code>
    `;
}

load(Home, 'Home');
