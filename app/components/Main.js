import { load, Route } from "emmy-dom";

function Main() {
    this.behave('div');
    this.className = 'flex flex-col justify-center items-center text-center w-full h-fit';
  
    this.routes = Route.routes;
  
    this.handleLocation = () => {
        const path = window.location.pathname;
        const html = (path === '/' ? this.routes['/root'] : this.routes[path])
            || this.routes['/404'] || '<h1>404</h1>';
        if (this.innerHTML !== html) this.innerHTML = html;
    }
  
    window.route = (event) => {
        event.preventDefault();
        if (window.location.pathname === event.target.href) return;
        window.history.pushState({}, '', event.target.href);
        this.handleLocation();
    }
  
    window.onpopstate = this.handleLocation;
  
    this.callback = () => {
        this.handleLocation();
    };
  
    return ``;
}

load(Main, 'Main');