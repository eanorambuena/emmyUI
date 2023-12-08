import { load } from "emmy-dom";

function Gallery() {
    let cols = this.getAttribute('cols') ?? 3;
    let smCols = this.getAttribute('sm-cols') ?? 2;

    this.className = `grid grid-cols-${cols} gap-6 sm:grid-cols-${smCols} w-full`;

    return this.innerHTML;
}

load(Gallery, "Gallery");
