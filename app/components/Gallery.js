import { load } from "emmy-dom";

function Gallery() {
    this.className = "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 w-full";

    return this.innerHTML;
}

load(Gallery, "Gallery");
