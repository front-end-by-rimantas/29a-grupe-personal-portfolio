"use strict";

class Footer {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
    }

    init(){
        if (this.isValidSelector() && this.findTargetElement()) {
            this.render();
            return true;
        }
        else {
            return false;
        }

    }

    isValidSelector(){
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
        const HTML =`<div class="row">
                        <div class="col-12 col-md-6 col-lg-5 footer-section">
                            <h4>About Me</h4>
                            <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. <br><br>Copyright ©2021 All rights reserved | This template is made with  by <a href="https://colorlib.com/">Colorlib</a></p>      
                        </div>
                        <div class="col-12 col-md-6 col-lg-5 footer-section">
                            <h4>Newsletter</h4>
                            <p>Stay updated with our latest trends</p>
                            <div class="input">
                                <input type="text" class="email" placeholder="Enter Email Adress" required></imput>
                                <button class="submit" type="submit">
                                    <i class="arrow fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-2 footer-section">
                            <h4>Follow Me</h4>
                            <p>Let us be social</p>
                            <i class ="social-icon fa fa-facebook"></i>
                            <i class ="social-icon fa fa-twitter"></i>
                            <i class ="social-icon fa fa-dribbble"></i>
                            <i class="social-icon fa fa-behance"></i>
                        </div>
                    </div>`;
        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }
}

export { Footer }