class Interface {
    constructor(data) {
        this.data = data;
    }

    HTML() {
        const src = this.data.imgPath + this.data.src;
        return `<div class="testimonial">
                    <div class="thumb">
                        <img class="img-fluid" src="${src}" alt="${this.data.name}">
                    </div>
                    <div>
                        <p>${this.data.text}</p>
                        <h4>${this.data.name}</h4>
                        <p>${this.data.job}</p>
                    </div>
                </div>`;
    }
}

export { Interface }