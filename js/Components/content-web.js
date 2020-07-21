class ContentWeb extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        // write your code here
    }
}

customElements.define('content-web', ContentWeb);