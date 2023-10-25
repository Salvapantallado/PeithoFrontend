import "../styles/pageNotFound.css";
import Navbar from "../components/shared-components/Navbar";
import MobileNavbar from "../components/shared-components/MobileNavbar";
import Ticker from "../components/shared-components/Ticker";
import Footer from "../components/shared-components/Footer";

export default function PageNotFound({ screenTransition,
    setScreenTransition,}) {
    return(
        <div>
            <Ticker/>
            <Navbar  screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}/>
            <MobileNavbar  screenTransition={screenTransition}
          setScreenTransition={setScreenTransition}/>
        <div className="pageNotFound">
            <h1>¡Ups! La página que buscas no existe. Puedes volver al inicio con el links de la barra de navegación</h1>
        </div>
        <Footer/>
        </div>
    )
}