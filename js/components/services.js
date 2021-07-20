"use strict";

class Services {
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
        const HTML =`<div class ="container">
                        <div class="row">
                            <div class ="col-12 col-md-6 col-lg-6 service-start">
                                <h1 class="service-header">My offered services</h1>
                                <p class="service-text">At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
                            </div>
                        </div> 
                        <div class="row">   
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="/"   class="service-link">
                                    <i class="icon fa fa-pie-chart"></i>             
                                    <h4>Web Design</h4>
                                </a>
                                <p class="service-text">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>         
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="/" class="service-link">
                                    <i class="icon fa fa-laptop"></i>
                                    <h4>Web Development</h4>
                                </a>
                                <p class="service-text">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="/" class="service-link">
                                    <i class="icon fa fa-camera"></i>
                                    <h4>Photography</h4>
                                </a>
                                <p class="service-text">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 service-body">
                                <a href="/" class="service-link">
                                    <i class="icon fa fa-picture-o"></i>
                                    <h4>Clipping Path</h4>
                                </a>
                                <p class="service-text"> “It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="/" class="service-link">
                                    <i class="icon fa fa-mobile"></i>
                                    <h4>Apps Interface</h4>
                                </a>
                                <p class="service-text">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="/" class="service-link">
                                    <i class="icon fa fa-rocket"></i>
                                    <h4>Graphic Design</h4>
                                </a>
                                <p class="service-text">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                            </div>
                    </div>`;
        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }
}

export { Services }