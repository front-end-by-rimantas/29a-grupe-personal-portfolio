"use strict";

class FeaturedProjects {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
        this.types = null;
        this.imageBlocks = null;
        this.modal = null;
    }

    init() {
        if (this.isValidSelector() && this.findTargetElement()) {
            this.addEvents();
            this.generateModal();
            this.addModalEvents();
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
        this.types = this.DOM.querySelectorAll("div > div > span"); 
        let types = this.types;
        this.imageBlocks = this.DOM.querySelectorAll("div > .image-block"); 
        let imageBlocks = this.imageBlocks;
        let generateModal = this.generateModal.bind(this);
        let addModalEvents = this.addModalEvents.bind(this);
        let removeModalEvents = this.removeModalEvents.bind(this);
        
        types[0].addEventListener("click", function() {
            for (let i of imageBlocks) {
                i.classList.remove("hidden");
            }
            for (let i of types) {
                i.style.color = "#333";
            }
            types[0].style.color = "#8490ff";
            removeModalEvents();
            generateModal();
            addModalEvents();
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
            removeModalEvents();
            generateModal();
            addModalEvents();
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
            removeModalEvents();
            generateModal();
            addModalEvents();
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
            removeModalEvents();
            generateModal();
            addModalEvents();
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
            removeModalEvents();
            generateModal();
            addModalEvents();
        });
    }

    generateModal() {
        this.modal = this.DOM.querySelector(".modal");
        let colors = [];
        for (let i of this.types) {
            colors.push(window.getComputedStyle(i).color);
        }
        if (colors[0] === "rgb(132, 144, 255)") {
            this.modal.innerHTML = `<span class="close cursor">&times;</span>
            <div class="modal-content">   
                <div class="mySlides">
                    <div class="numbertext">1 / 6</div>
                    <img src="./img/featured-projects/project-1.webp" style="width:100%">
                </div>
                <div class="mySlides">
                    <div class="numbertext">2 / 6</div>
                    <img src="./img/featured-projects/project-2.webp" style="width:100%">
                </div>
                <div class="mySlides">
                    <div class="numbertext">3 / 6</div>
                    <img src="./img/featured-projects/project-3.webp" style="width:100%">
                </div>       
                <div class="mySlides">
                    <div class="numbertext">4 / 6</div>
                    <img src="./img/featured-projects/project-4.webp" style="width:100%">
                </div>      
                <div class="mySlides">
                    <div class="numbertext">5 / 6</div>
                    <img src="./img/featured-projects/project-5.webp" style="width:100%">
                </div>        
                <div class="mySlides">
                    <div class="numbertext">6 / 6</div>
                    <img src="./img/featured-projects/project-6.webp" style="width:100%">
                </div>
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>    
            </div>`;
        } else if (colors[1] === "rgb(132, 144, 255)") {
            this.modal.innerHTML = `<span class="close cursor">&times;</span>
            <div class="modal-content">   
                <div class="mySlides">
                    <div class="numbertext">1 / 2</div>
                    <img src="./img/featured-projects/project-1.webp" style="width:100%">
                </div>
                <div class="mySlides">
                    <div class="numbertext">2 / 2</div>
                    <img src="./img/featured-projects/project-5.webp" style="width:100%">
                </div>        
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>    
            </div>`;
        } else if (colors[2] === "rgb(132, 144, 255)") {
            this.modal.innerHTML = `<span class="close cursor">&times;</span>
            <div class="modal-content">   
                <div class="mySlides">
                    <div class="numbertext">1 / 2</div>
                    <img src="./img/featured-projects/project-2.webp" style="width:100%">
                </div>
                <div class="mySlides">
                    <div class="numbertext">2 / 2</div>
                    <img src="./img/featured-projects/project-6.webp" style="width:100%">
                </div>        
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>    
            </div>`;
        } else if (colors[3] === "rgb(132, 144, 255)") {
            this.modal.innerHTML = `<span class="close cursor">&times;</span>
            <div class="modal-content">   
                <div class="mySlides">
                    <div class="numbertext">1 / 1</div>
                    <img src="./img/featured-projects/project-3.webp" style="width:100%">
                </div>
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>    
            </div>`;
        } else if (colors[4] === "rgb(132, 144, 255)") {
            this.modal.innerHTML = `<span class="close cursor">&times;</span>
            <div class="modal-content">   
                <div class="mySlides">
                    <div class="numbertext">1 / 1</div>
                    <img src="./img/featured-projects/project-4.webp" style="width:100%">
                </div>
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>    
            </div>`;
        }
    }

    addModalEvents() {
        let modal = document.getElementById("myModal");
        let slides = document.getElementsByClassName("mySlides");
        let n;

        for (let i = 0; i < document.getElementsByClassName("binoculars").length; i++) {
            document.getElementsByClassName("binoculars")[i].addEventListener("click", function _listener() {
                console.log(slides);
                modal.style.display = "block";               
                console.log("event works");
                console.log(i);
                slides[i].style.display = "block";
                n = i;

                document.getElementsByClassName("binoculars")[i].removeEventListener("click", _listener, true);
            }, true);
        }

        document.getElementsByClassName("prev")[0].addEventListener("click", function _listener() {
            slides[n].style.display = "none";
            n--;
            slides[n].style.display = "block";
            document.getElementsByClassName("prev")[0].removeEventListener("click", _listener, true);
        }, true);

        document.getElementsByClassName("next")[0].addEventListener("click", function _listener() {
            slides[n].style.display = "none";
            n++;
            slides[n].style.display = "block";
            document.getElementsByClassName("next")[0].removeEventListener("click", _listener, true);
        }, true);

        document.getElementsByClassName("close")[0].addEventListener("click", function _listener() {
            modal.style.display = none;
            document.getElementsByClassName("close")[0].removeEventListener("click", _listener, true);
        }, true);
    }

    removeModalEvents() {
        document.getElementsByClassName("binoculars")[i].removeEventListener("click", _listener, true);
        document.getElementsByClassName("prev")[0].removeEventListener("click", _listener, true);
        document.getElementsByClassName("next")[0].removeEventListener("click", _listener, true);
        document.getElementsByClassName("close")[0].removeEventListener("click", _listener, true);
    }
}

export { FeaturedProjects }