class CookieBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                .cookie-banner {
                    background: white;
                    border-top: 1px solid #e4e4e4;
                    bottom: 0;
                    display: block;
                    padding: 1rem 2rem;
                    position: fixed;
                    width: 100%;
                }

                .cookie-message {
                    font-size: 1.6rem;
                    line-height: 1;
                }

                .cookie-banner-wrapper {
                    align-items: center;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin: 0 auto;
                    max-width: 1280px;
                }

                .cookie-banner__button {
                    background: #4a4a4a;
                    border-radius: 1rem;
                    border: 0;
                    box-sizing: border-box;
                    color: #fff;
                    cursor: pointer;
                    font-size: 1.4rem;
                    font-weight: 700;
                    margin: 0;
                    padding: 0.75rem 2rem;
                    text-align: center;
                    text-decoration: none;
                    text-transform: uppercase;
                    transition: all 0.3s ease-in-out;
                    -webkit-transition: all 0.3s ease-in-out;
                    white-space: nowrap;
                    line-height: 1;
                }

                .cookie-banner-privacy-link {
                    color: #4a4a4a;
                    text-decoration: underline;
                    font-size: 1.6rem;
                    line-height: 1;
                }
            </style>
            <div id="cookie-banner" class="cookie-banner">
                <div class="cookie-banner-wrapper">
                    <div class="cookie-message" id="cookie-message">We're using cookies.</div>
                    <button class="cookie-banner__button" id="cookie-button">Ok</button> 
                    <a class="cookie-banner-privacy-link" id="cookie-banner-privacy-link" href="#">Privacy policy</a>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.banner = this.shadowRoot.getElementById('cookie-banner');
        this.buttonText = this.shadowRoot.getElementById('cookie-button');
        this.messageDiv = this.shadowRoot.getElementById('cookie-message');
        this.privacyLink = this.shadowRoot.getElementById('cookie-banner-privacy-link');
    }

    connectedCallback() {
        const showBanner = localStorage.getItem('show-cookie-banner');
        if (showBanner === null || showBanner === 'false') {
            this.banner.style.display = 'block';
        } else {
            this.banner.style.display = 'none';
        }

        this.buttonText.addEventListener('click', () => {
            localStorage.setItem('show-cookie-banner', 'true');
            this.banner.style.display = 'none';
        });

        this.updateContent();
    }

    static get observedAttributes() {
        return ['message', 'link', 'linktext', 'buttontext', 'color'];
    }

    attributeChangedCallback() {
        this.updateContent();
    }

    updateContent() {
        const message = this.getAttribute('message');
        const link = this.getAttribute('link');
        const linkText = this.getAttribute('link-text');
        const buttonText = this.getAttribute('button-text');
        const buttonColor = this.getAttribute('button-color');

        if (message) {
            this.messageDiv.innerText = message;
            this.messageDiv.style.color = buttonColor;
        }
        if (linkText) {
            this.privacyLink.innerText = linkText;
            this.privacyLink.style.color = buttonColor;
        }

        if (link) this.privacyLink.href = link;
        if (buttonText) this.buttonText.innerText = buttonText;
        if (buttonColor) this.buttonText.style.backgroundColor = buttonColor;
    }
}

window.customElements.define('cookie-banner', CookieBanner);
