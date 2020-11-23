export class Component extends HTMLElement {
    constructor(url) {
        super();
        url = url.replace(window.location.href, '')
        let cssUrl = url.replace('js', 'css')
        let htmlUrl = url.replace('js', 'html')
        this.attachShadow({ mode: 'open' });

        const element = this
        fetch(htmlUrl).then(
            response => {
                if (response.ok) {
                    response.text().then(
                        data => {
                            this.shadowRoot.innerHTML = data;
                            element.init()
                            let observer = new MutationObserver(function (mutations) {
                                mutations.forEach(function (mutation) {
                                    console.log(mutation)
                                    if (mutation.type == "attributes") {
                                        element.changes() 

                                    }
                                });
                            });

                            observer.observe(this, {
                                attributes: true,
                                childList: true //configure it to listen to attribute changes,
                            });
                        }
                    );

                }
            }
        )
        fetch(cssUrl).then(
            response => {
                if (response.ok) {
                    response.text().then(
                        data => {
                            var sheet = new CSSStyleSheet
                            sheet.replaceSync(data)
                            this.shadowRoot.adoptedStyleSheets = [sheet]
                        }
                    );

                }
            }
        )






    }
    init() {

    }
    changes() {

    }
    letTheParentKnow(name, detail) {
        const event = new CustomEvent(name,
            {
                detail: detail
            });
        this.parentNode.parentNode.host.dispatchEvent(event);
    }
}