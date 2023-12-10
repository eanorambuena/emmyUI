import { load } from "emmy-dom";

function Gallery() {
    let cols = this.getAttribute('cols') ?? 1;
    let largeCols = this.getAttribute('large-cols') ?? 2;

    this.className = `grid auto-rows-fr grid-cols-${cols} md:grid-cols-${largeCols} gap-6 w-full`;

    return this.innerHTML;
}

load(Gallery, "Gallery");
