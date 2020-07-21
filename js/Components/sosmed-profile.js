class SosmedProfile extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="profile-sosmed center-align hide-on-med-and-down">
            <a href="https://www.facebook.com/Adiknya.situmorang" class="waves-effect waves-circle">
                <i class="fab fa-facebook fa-2x fa-fw black-text"></i>
            </a>
            <a href="https://github.com/luhur65" class="waves-effect waves-circle">
                <i class="fab fa-github fa-2x fa-fw black-text"></i>
            </a>
            <a href="https://www.instagram.com/dharma_situmorang" class="waves-effect waves-circle">
                <i class="fab fa-instagram fa-2x fa-fw black-text"></i>
            </a>
        </div>
        `;
    }
}

customElements.define('sosmed-profile', SosmedProfile);