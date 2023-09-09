import "../../styles/navbar.css";
import { useState } from "react";
import MenuSlide from "./MenuSlide";
import FavSlide from "./FavSlide";

export default function MobileNavbar({
  screenTransition,
  setScreenTransition,
}) {
  const [open, setOpen] = useState(false);
  const [openFav, setOpenFav] = useState(false);



  const LoadCurtain = async (e) => {
    setScreenTransition(!screenTransition);
    setTimeout(() => {
      setScreenTransition(!screenTransition);
      window.location.href = e;
    }, 1500);
  };

  const navbar = document.querySelector(".mobile-navbar");
  const spot = document.querySelector(".spot");

  const handleScroll = (entries) => {
    const spotIsVisible = entries[0].isIntersecting;
    if (spotIsVisible) navbar.classList.remove("fixed-top");
    else navbar.classList.add("fixed-top");
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshhold: 0,
  };

  const observer = new IntersectionObserver(handleScroll, options);
  if (navbar !== null) observer.observe(spot);

 

  return (
    <>
      <nav className="mobile-navbar">
        <MenuSlide open={open} setOpen={setOpen} LoadCurtain={LoadCurtain} />
        <FavSlide openFav={openFav} setOpenFav={setOpenFav} LoadCurtain={LoadCurtain} />
      </nav>
      <div className="spot" />
    </>
  );
}
