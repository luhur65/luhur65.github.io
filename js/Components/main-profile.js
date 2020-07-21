class MainProfile extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="center-align">
            <img class="responsive-img rounded circle img-profile" src="./img/profile/34.jpg"
                alt="Profile Picture">
            <p class="profile-name">Dharma Bakti Situmorang</p>
            <span class="job-profile blue-text">Frontend Web Developer</span>
        </div>
        `;
    }
}

customElements.define('main-profile', MainProfile);