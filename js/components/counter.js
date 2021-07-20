"use strict";

class Counter {
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
        const HTML = `<section class="box">
        <div class="countBox">
            <h1 class="counter" data-target="2536">0</h1>
            <h6>projects compleated</h6>
        </div>
        <div class="countBox">
            <h1 class="counter" data-target="6784">0</h1>
            <h6>happy clients</h6>
        </div>
        <div class="countBox">
            <h1 class="counter" data-target="22390">0</h1>
            <h6>cups of coffee</h6>
        </div>
        <div class="countBox">
            <h1 class="counter" data-target="434">0</h1>
            <h6>real professionals</h6>
        </div>
    </section>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }

}

export { Counter };

window.addEventListener("load", function(){
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter=> {
    const upCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.round(target / speed);

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(upCount, 1);
        }
    }
    upCount();
})
});