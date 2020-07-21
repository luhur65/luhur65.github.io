import MyPortofolio from "../Data/portofolio-source.js";

const renderAllPortfolio = portfolio => {
    return `<div class="col s12 m6 l12">
        <div class="portfolio bg-waves">
            <h6 class="title-portfolio orange-text">
                <a class="view-portfolio" href="${portfolio.url}">
                    <i class="fas fa-folder fa-fw icon-folder"></i>${portfolio.title}
                </a>
            </h6>
            <p class="portfolio-decs font-bold">${portfolio.desc}</p>
            <div class="img-preview-portfolio center-align">
                <img class="materialboxed responsive-img" src="${portfolio.img}" alt="Img ${portfolio.title}">
            </div>
            <div class="center-align hide-on-med-and-up">
                ${portfolio.lang.map(l => l).join('')}
            </div>
        </div>
    </div>`;
}

const showAllPortfolio = _ => {

    let allPortfolio = '';
    MyPortofolio.forEach(portfolio => {
        allPortfolio += renderAllPortfolio(portfolio);

    });

    return allPortfolio;
}

const directLink = link => {

    let timerInterval
    Swal.fire({
        title: 'Direct to Link ...',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            document.location.href = link;

        } else {

            Swal.fire({
                icon: 'error',
                title: 'Failed!!',
                text: 'You Canceled the direct before time\'s up'
            })
        }
    })
}

const linkBroken = _ => {

    Swal.fire({
        icon: 'error',
        title: 'Oops ...!',
        text: 'The Link Has Been Broken!!'
    });
}


const PortofolioPage = _ => {

    const DOMPortfolio = document.querySelector('#portfolio-view'); 
    DOMPortfolio.innerHTML = showAllPortfolio();
    $('.materialboxed').materialbox();

    const portfolioURL = document.querySelectorAll('.view-portfolio');
    portfolioURL.forEach(function(url) {
        url.addEventListener('click', function(e) {
            e.preventDefault();

            const urlDirect = this.attributes.href.value;
            (urlDirect != 'undefined') ? directLink(urlDirect) : linkBroken();

        });
    });

}


export default PortofolioPage;