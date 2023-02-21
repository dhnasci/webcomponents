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

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            border: 1px solid gray;
            box-shadow: 11px 13px 26px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 11px 13px 26px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 11px 13px 26px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card__left > span {
            font-weight: 500;
        }
        .card__left > a {
            margin-top: 15px;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card__left > p {
            color: gray;
        }
        `;
        return style;
    }
}

customElements.define('card-news', Cardnews);
