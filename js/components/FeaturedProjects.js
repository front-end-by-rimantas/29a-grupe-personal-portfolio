"use strict";

class FeaturedProjects {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
        this.types = null;
        this.imageBlocks = null;
    }

    init() {
        if (this.isValidSelector() && this.findTargetElement()) {
            this.addEvents();
            return true;
        } else {
            return false;
        }
    }

    isValidSelector() {
        if (typeof this.selector !== "string" || this.selector === "") {
            console.error("ERROR: selector turi buti ne tuscias string");
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.error("Pagal pateikta selector, elementas neegzistuoja");
            return false;
        }
        return true;
    }

    addEvents() {
        let types = this.DOM.querySelectorAll("div > div > span");
        let imageBlocks = this.DOM.querySelectorAll("div > .image-block");
        
        types[0].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.remove("hidden");
            }
            for (let i of types) {
                i.style.color = "#333";
            }
            types[0].style.color = "#8490ff";
        });

        types[1].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.add("hidden");
            }
            imageBlocks[0].classList.remove("hidden");
            imageBlocks[4].classList.remove("hidden");
            for (let i of types) {
                i.style.color = "#333";
            }
            types[1].style.color = "#8490ff";
        });

        types[2].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.add("hidden");
            }
            imageBlocks[1].classList.remove("hidden");
            imageBlocks[5].classList.remove("hidden");
            for (let i of types) {
                i.style.color = "#333";
            }
            types[2].style.color = "#8490ff";
        });

        types[3].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.add("hidden");
            }
            imageBlocks[2].classList.remove("hidden");
            for (let i of types) {
                i.style.color = "#333";
            }
            types[3].style.color = "#8490ff";
        });

        types[4].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.add("hidden");
            }
            imageBlocks[3].classList.remove("hidden");
            for (let i of types) {
                i.style.color = "#333";
            }
            types[4].style.color = "#8490ff";
        });
    }
}

export { FeaturedProjects }