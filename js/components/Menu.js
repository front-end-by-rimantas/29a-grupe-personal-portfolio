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

        //Large screen menu

        window.addEventListener("scroll", function () {
            if (this.scrollY > 200) {
                document.querySelector("header").classList.add("scrolled");
            } else {
                document.querySelector("header").classList.remove("scrolled");
            }
        });

        let span = document.querySelectorAll(".headerContainer span");
        let blogDropdown = document.querySelector(".blog-dropdown");
        let pagesDropdown = document.querySelector(".pages-dropdown");
        let level2 = document.querySelector(".level-2");
        let level2Dropdown = document.querySelector(".level-2-dropdown");

        span[0].addEventListener("mouseenter", function () {
            blogDropdown.classList.add("visible");
            setTimeout(function () {
                blogDropdown.classList.add("visible-opacity");
            }, 20);
        });

        span[0].addEventListener("mouseleave", function () {
            setTimeout(function() {
                if (!blogDropdown.matches(":hover") && !span[0].matches(":hover")) {
                    blogDropdown.classList.remove("visible-opacity");
                    setTimeout(function () {
                        blogDropdown.classList.remove("visible");
                    }, 800);
                }
            }, 700);
        });

        span[1].addEventListener("mouseenter", function() {
            pagesDropdown.classList.add("visible");
            setTimeout(function() {
                pagesDropdown.classList.add("visible-opacity");
            }, 20);
        });

        span[1].addEventListener("mouseleave", function () {
            setTimeout(function() {
                if (!pagesDropdown.matches(":hover") && !span[1].matches(":hover") && !level2Dropdown.matches(":hover")) {
                    pagesDropdown.classList.remove("visible-opacity");
                    setTimeout(function () {
                        pagesDropdown.classList.remove("visible");
                    }, 800);
                }
            }, 700);
        });

        level2.addEventListener("mouseenter", function() {
            level2Dropdown.classList.add("visible");
            setTimeout(function() {
                level2Dropdown.classList.add("visible-opacity");
            }, 20);
        });

        level2.addEventListener("mouseleave", function() {
            setTimeout(function() {
                if (!level2Dropdown.matches(":hover")) {
                    level2Dropdown.classList.remove("visible-opacity");
                    setTimeout(function () {
                        level2Dropdown.classList.remove("visible");
                    }, 800);
                }
            }, 700);
        });

        level2Dropdown.addEventListener("mouseleave", function () {
                    level2Dropdown.classList.remove("visible-opacity");
                    setTimeout(function () {
                        level2Dropdown.classList.remove("visible");
                    }, 800);
        });

        //Small screen menu

        let icons = document.querySelectorAll(".mobile-menu .fa")
        let mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
        console.log(icons);
        console.log(mobileDropdowns);

        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener("click", function() {
                if (icons[i].classList.contains("fa-chevron-down")) {
                    icons[i].classList.replace("fa-chevron-down", "fa-chevron-up");
                } else {
                    icons[i].classList.replace("fa-chevron-up", "fa-chevron-down");
                }

                if (mobileDropdowns[i].style.maxHeight) {
                    mobileDropdowns[i].style.maxHeight = null;
                } else {
                    mobileDropdowns[i].style.maxHeight = mobileDropdowns[i].scrollHeight + "px";
                }
            });
        }
    }
}

export { Menu }