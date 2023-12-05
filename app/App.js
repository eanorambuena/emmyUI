import { load } from "emmy-dom";
import "./components/TextArea";

load('/juroQueFui/Home.html', 'Home');
load('/juroQueFui/About.html', 'About');
load('/juroQueFui/Contact.html', 'Contact');
load('/juroQueFui/Code404.html', 'Code404');

function App () {
    this.behave('div');
    this.className = 'flex flex-col justify-space-between space-y-3 text-center w-full h-full';

  return /*html*/`
    <nav>
      <a href="/juroQueFui/" onclick="route(event)">Home</a>
      <a href="/juroQueFui/about" onclick="route(event)">About</a>
      <a href="/juroQueFui/contact" onclick="route(event)">Contact</a>
    </nav>
    <Route href="/juroQueFui/" to="Home"></Route>
    <Route href="/juroQueFui/about" to="About"></Route>
    <Route href="/juroQueFui/404" to="Code404"></Route>
    <Route href="/juroQueFui/contact" to="Contact"></Route>
    <Router></Router> 
  `;
}

load(App, 'App');
