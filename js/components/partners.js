"use strict"
class Partners {
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
        const HTML = `
        <div class="partnersContainer">
        <div class="partnersSlide">
            <div class="sliderWraper">
            <div class="slideLogo"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./img/partner-logos/splogo1.png"></a></div>
            <div class="slideLogo"><a href="./"><img src="./img/partner-logos/splogo2.png"></a></div>
            <div class="slideLogo"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./img/partner-logos/splogo3.png"></a></div>
            <div class="slideLogo"><a href="./"><img src="./img/partner-logos/splogo4.png"></a></div>
            <div class="slideLogo"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./img/partner-logos/splogo5.png"></a></div>
            <div class="slideLogo"><a href="./"><img src="./img/partner-logos/splogo1.png"></a></div>
            <div class="slideLogo"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./img/partner-logos/splogo2.png"></a></div>
            <div class="slideLogo"><a href="./"><img src="./img/partner-logos/splogo3.png"></a></div>
            <div class="slideLogo"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./img/partner-logos/splogo4.png"></a></div>
            <div class="slideLogo"><a href="./"><img src="./img/partner-logos/splogo5.png"></a></div>
            </div>
        </div>
    </div>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }

}

export { Partners };
window.addEventListener("load", () => {
    $('.sliderWraper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});