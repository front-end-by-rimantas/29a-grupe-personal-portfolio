"use strict";

class Intro {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
    }

    init() {
        if (this.isValidSelector() && this.findTargetElement()) {
            this.render();
            return true;
        }
        else {
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

    render() {
        const HTML = `<div class="row">
                            <div class="col-12 col-md-6 col-lg-6 intro-left">
                                <h6>This is me</h6>
                                <h1>Philip Gilbert</h1>
                                <p>You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
                                <a href="#" class="primary-btn text-uppercase">discover now</a>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6">
                                <img class="introImg" src="./img/hero-img.png" alt="Philip Gilbert">
                            </div>
                        </div>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }

}

export { Intro }