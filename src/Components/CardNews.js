class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const link_title = document.createElement("a");
        link_title.textContent = this.getAttribute("title");
        link_title.href = this.getAttribute("link-url");

        const news_content = document.createElement("p");
        news_content.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link_title);
        cardLeft.appendChild(news_content);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default.jpg";
        newsImage.alt = 'Foto da notícia';

        cardRight.appendChild(newsImage);
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {}
}

customElements.define('card-news', Cardnews);
