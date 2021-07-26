"use strict";

class Menu {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
    }

    init() {
        if (this.isValidSelector() && this.findTargetElement()) {
            this.render();
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

    render() {
        let HTML = `<div class="container">
        <div class="row">
            <div class="logo">
                <a href="./index.html">
                    <img src="./assets/icons/personal-logo.png">
                </a>
            </div>
            <nav>
                <a href="" class="menu-home">HOME</a>
                <a href="" class="">ABOUT</a>
                <a href="" class="">SERVICES</a>
                <a href="" class="">PORTFOLIO</a>
                <a href="" class="">PRICING</a>
                <span>
                    <a href="" class="blog">BLOG</a>
                    <a href="" class="fa fa-angle-down blog icon"></a>
                    <div class="blog-dropdown">
                        <a href="">Blog Home</a>
                        <a href="">Blog Single</a>
                    </div>
                </span>
                <span>
                    <a href="" class="pages">PAGES</a>
                    <a href="" class="fa fa-angle-down pages icon"></a>
                    <div class="pages-dropdown">
                        <a href="">Elements</a>
                        <a href="" class="level-2">Level 2 <i class="fa fa-angle-right level-2-icon"></i></a>
                        <div class="level-2-dropdown">
                            <a href="">Item One</a>
                            <a href="">Item Two</a>
                        </div>
                    </div>
                </span>
                <a href="" class="">CONTACT</a>
            </nav>
            <img src="./assets/icons/lnr-menu.svg" alt="" class="mobile-menu-img">
            <div class="mobile-menu">
                <a href="" class="blue-color mobile-home">HOME</a>
                <a href="">ABOUT</a>
                <a href="">SERVICES</a>
                <a href="">PORTFOLIO</a>
                <a href="">PRICING</a>
                <span>
                    <a href="javascript:void(0);" class="blue-link"><span>BLOG</span> <i class="fa fa-chevron-down mobile-blog-icon"></i></a>
                    <div class="mobile-dropdown mobile-blog-dropdown">
                        <a href="">Blog Home</a>
                        <a href="">Blog Single</a>
                    </div>
                </span>
                <span>
                    <a href="javascript:void(0);" class="blue-link"><span>PAGES</span><i class="fa fa-chevron-down mobile-pages-icon"></i></a>
                    <div class="mobile-dropdown mobile-pages-dropdown">
                        <a href="">Elements</a>
                        <a href="javascript:void(0);" class="blue-link"><span>Level 2</span><i class="fa fa-chevron-down mobile-level-2-icon"></i></a>
                        <div class="mobile-dropdown mobile-level-2-dropdown">
                            <a href="">Item One</a>
                            <a href="">Item Two</a>
                        </div>
                    </div>
                </span>
                <a href="">CONTACT</a>
            </div>
            <div class="mobile-overlay">
            </div>
            <div class="mobile-close-img">
                <img src="./assets/icons/lnr-cross.svg" alt="">
            </div>
        </div>
    </div>`;
    this.DOM.innerHTML = HTML;
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
            }, 500);
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
            }, 500);
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
            }, 500);
        });

        level2Dropdown.addEventListener("mouseleave", function () {
                    level2Dropdown.classList.remove("visible-opacity");
                    setTimeout(function () {
                        level2Dropdown.classList.remove("visible");
                    }, 500);
        });

        //Small screen menu

        let icons = document.querySelectorAll(".mobile-menu .fa")
        let mobileMenu = document.querySelector(".mobile-menu");
        let mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
        let blueLinks = document.querySelectorAll(".blue-link");
        let mobileImg = document.querySelector(".mobile-menu-img")
        let mobileCloseImg = document.querySelector(".mobile-close-img");
        let mobileOverlay = document.querySelector(".mobile-overlay");

        mobileImg.addEventListener("click", function() {
            setTimeout(function() {
                mobileOverlay.style.display = "block";
            }, 10);
            mobileMenu.style.width = "264px";
            mobileOverlay.style.opacity = "0.8";
            document.body.classList.add("no-scrolling");
            mobileImg.style.display = "none";
            mobileCloseImg.style.display = "block";
            mobileCloseImg.style.zIndex = "2";
        });

        mobileOverlay.addEventListener("click", function() {
            mobileMenu.style.width = "0";
            mobileOverlay.style.opacity = "0";
            document.body.classList.remove("no-scrolling");
            if (window.innerWidth < 1000) {
                mobileImg.style.display = "flex";
            }
            mobileCloseImg.style.display = "none";
            mobileCloseImg.style.zIndex = "-1";
            setTimeout(function() {
                mobileOverlay.style.display = "none";
            }, 500);
        });

        mobileCloseImg.addEventListener("click", function() {
            mobileMenu.style.width = "0";
            mobileOverlay.style.opacity = "0";
            document.body.classList.remove("no-scrolling");
            if (window.innerWidth < 1000) {
                mobileImg.style.display = "flex";
            }
            mobileCloseImg.style.display = "none";
            mobileCloseImg.style.zIndex = "-1";
            setTimeout(function() {
                mobileOverlay.style.display = "none";
            }, 500);
        });

        window.addEventListener("resize", function() {
            if (mobileOverlay.style.opacity == 0) {
                if (window.innerWidth < 1000) {
                    mobileImg.style.display = "flex";
                } else {
                    mobileImg.style.display = "none";
                }
            }
            if (mobileOverlay.style.opacity == 0.8) {
                if (window.innerWidth >= 1000) {
                    mobileCloseImg.style.display = "none";
                    mobileCloseImg.style.zIndex = "-1";
                } else {
                    mobileCloseImg.style.display = "block";
                    mobileCloseImg.style.zIndex = "2";
                }
            }
        });

        for (let i = 0; i < icons.length; i++) {
            icons[i].addEventListener("click", function() {
                if (icons[i].classList.contains("fa-chevron-down")) {
                    icons[i].classList.replace("fa-chevron-down", "fa-chevron-up");
                } else {
                    icons[i].classList.replace("fa-chevron-up", "fa-chevron-down");
                }

                if (blueLinks[i].classList.contains("blue-color")) {
                    blueLinks[i].classList.remove("blue-color");
                } else  {
                    blueLinks[i].classList.add("blue-color");
                }
                if (mobileDropdowns[i].style.maxHeight) {
                    mobileDropdowns[i].style.maxHeight = null;
                } else {
                    mobileDropdowns[i].style.maxHeight = mobileDropdowns[i].scrollHeight + "px";
                }
            });
        }

        icons[2].addEventListener("click", function() {
            mobileDropdowns[1].style.maxHeight = 2 * mobileDropdowns[1].scrollHeight + "px";
        });
    }
}

export { Menu }