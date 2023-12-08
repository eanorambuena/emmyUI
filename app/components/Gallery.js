import { load } from "emmy-dom";

function Gallery() {
    let cols = this.getAttribute('cols') ?? 1;
    let smCols = this.getAttribute('sm-cols') ?? 2;
    let xlCols = this.getAttribute('xl-cols') ?? 3;

    this.className = `grid grid-cols-${cols} gap-6 sm:grid-cols-${smCols} xl:grid-cols-${xlCols} w-full`;

    return this.innerHTML;
}

load(Gallery, "Gallery");
