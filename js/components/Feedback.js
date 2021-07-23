"use strict";

class Feedback {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;
        this.listDOM = null;
        this.upArrowDOM = null;
        this.dnArrowDOM = null;
        this.animationInProgress = false;
        this.animationDuration = 250;
        this.itemsPerView = 1;
        this.visibleItemIndex = 0;
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.data.itemsPerView = this.data.itemsPerView.sort((a, b) => a.minWidth - b.minWidth);
        this.itemsPerView = this.calculateItemsPerViewValue();
        this.visibleItemIndex = this.itemsPerView;
        this.render(this.itemsPerView);
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    generateItems(data) {
        const itemsCount = data.length;
        const itemWidth = 100 / itemsCount;
        let HTML = '';

        for (let i = 0; i < itemsCount; i++) {
            const obj = new this.component({
                ...data[i],
                imgPath: this.data.imgPath
            });
            HTML += `<div class="item" style="width: ${itemWidth}%;">
                        ${obj.HTML()}
                    </div>`;
        }
        return HTML;
    }

    render(itemsPerView) {
        const clonedData = [
            ...this.data.list.slice(-itemsPerView),
            ...this.data.list,
            ...this.data.list.slice(0, itemsPerView)
        ];
        const itemsCount = clonedData.length;
        const listWidth = itemsCount / itemsPerView * 100;
        const translate = itemsPerView / itemsCount * 100;

        const HTML = `<div class="bottom">
                        <div class="flex-title">
                            <div class="text-center">
                                <h1>Client’s Feedback About Me</h1>
                                <p>It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or
                                        even a person.</p>
                            </div>
                        </div>
                        <div class="carousel">
                            <div class="gallery">
                                <div class="list" style="width: ${listWidth}%; transform: translateX(-${translate}%);">
                                    ${this.generateItems(clonedData)}
                                </div>
                            </div>
                            <div class="controls">
                                <div class="flex-arrow">
                                    <div class="arrow-up">
                                        <div class="flex-arrow-up"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></div>
                                    </div>
                                    <div class="arrow-dn">
                                        <div class="flex-arrow-down"><i class="fa fa-long-arrow-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

        this.DOM.innerHTML = HTML;
        this.listDOM = this.DOM.querySelector('.list');
        this.upArrowDOM = this.DOM.querySelector('.arrow-up .flex-arrow-up');
        this.dnArrowDOM = this.DOM.querySelector('.arrow-dn .flex-arrow-down');
    }

    calculateItemsPerViewValue() {
        const responsive = this.data.itemsPerView;

        let itemsToRender = 1;
        for (let i = 0; i < responsive.length; i++) {
            if (innerWidth > responsive[i].minWidth) {
                itemsToRender = responsive[i].itemsCount;
            }
        }
        return itemsToRender;
    }

    slideAnimation() {
        const translate = this.visibleItemIndex / (this.data.list.length + 2 * this.itemsPerView) * 100;
        this.listDOM.style.transform = `translateX(-${translate}%)`;
    }

    addEvents() {
        window.addEventListener('resize', () => {
            const itemsToRender = this.calculateItemsPerViewValue();

            // re-render content only if there is new value for this.itemsPerView
            if (this.itemsPerView !== itemsToRender) {
                this.render(itemsToRender);
                this.itemsPerView = itemsToRender;

            }
        })

        // PREVIOUS ITEM
        this.upArrowDOM.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex--;
                this.slideAnimation();
                if (this.visibleItemIndex === 0) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.data.list.length;
                        this.slideAnimation();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 100)
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        })
        // NEXT ITEM
        this.dnArrowDOM.addEventListener('click', () => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex++;
                this.slideAnimation();
                if (this.data.list.length + this.itemsPerView === this.visibleItemIndex) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.itemsPerView;
                        this.slideAnimation();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 10)
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        })

        setInterval(() => {
            if (!this.animationInProgress) {
                this.animationInProgress = true;
                this.visibleItemIndex++;
                this.slideAnimation();
                if (this.data.list.length + this.itemsPerView === this.visibleItemIndex) {
                    setTimeout(() => {
                        this.listDOM.style.transition = 'all 0s';
                        this.visibleItemIndex = this.itemsPerView;
                        this.slideAnimation();
                    }, this.animationDuration);
                    setTimeout(() => {
                        this.listDOM.style.transition = `all ${this.animationDuration}ms`;
                    }, this.animationDuration + 10)
                }
                setTimeout(() => {
                    this.animationInProgress = false;
                }, this.animationDuration);
            }
        }, 5000);
    }
}

export { Feedback }
