import HomePage from "../App/Home.js";
import PortofolioPage from "../App/Porto.js";
import AboutPage from "../App/About.js";

const RoutingPage = (page = "") => {

    try {

        switch (page) {
            case 'portfolio':
                PortofolioPage();
                break;
            case 'about':
                AboutPage();
                break;

            default:
                HomePage();
                break;
        }

        $('.scrollspy').scrollSpy();
        $(window).scroll(function () {
            const wScroll = $(this).scrollTop();
            if (wScroll > 1000) {
                $('.btn-upper').removeClass('hidden');
                
            } else {
                $('.btn-upper').addClass('hidden');
            }
            
        });

    } catch (error) {
        
        // ... write your error handling
    }

}

export default RoutingPage;