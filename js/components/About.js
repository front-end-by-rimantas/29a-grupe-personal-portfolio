"use strict";

class About {
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
                        <div class="col-12 col-md-6 col-lg-6">
                            <img class="aboutImg" src="./img/about-img.png" alt="About Me">
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 about-right">
                            <h6>About Me</h6>
                            <h1>Personal Details</h1>
                            <p>Here, I focus on a range of items and features that we use in life without giving them a second
                                thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco.</p>
                            <a href="#" class="primary-btn text-uppercase">View Full Details</a>
                        </div>
                    </div>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }

}

export { About }