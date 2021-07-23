"use strict";

class Menu {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
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
        window.addEventListener("scroll", function () {
            if (this.scrollY > 200) {
                document.querySelector("header").classList.add("scrolled");
            } else {
                document.querySelector("header").classList.remove("scrolled");
            }
        });

        let span = document.querySelectorAll(".headerContainer span");
        let blogDropdown = document.querySelector(".blog-dropdown");

        span[0].addEventListener("mouseenter", function () {
            blogDropdown.classList.add("visible");
            setTimeout(function () {
                blogDropdown.classList.add("visible-opacity");
            }, 20);
        });

        span[0].addEventListener("mouseleave", function () {
            blogDropdown.classList.remove("visible-opacity");
            setTimeout(function () {
                blogDropdown.classList.remove("visible");
            }, 300);
        });
    }
}

export { Menu }