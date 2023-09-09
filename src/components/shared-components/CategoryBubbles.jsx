import "../../styles/category-bubbles.css";

import Top from "../../images/Home/Bubbles/circle-one.jpg";
import Falda from "../../images/Home/Bubbles/circle-two.jpg";
import Vestido from "../../images/Home/Bubbles/circle-three.jpg";
import Abrigo from "../../images/Home/Bubbles/circle-five.jpg";
import Camisa from "../../images/Home/Bubbles/circle-six.jpg";
import Jardinero from "../../images/Home/Bubbles/circle-four.jpeg";
import { useEffect } from "react";

export default function CategoryBubble({flag, setFlag }) {

  const redir = (e) => {
    if(flag !== "" || flag !== null){
    setFlag(e)
    setTimeout(() => {
      window.location.href = "/catalogo"
    }, 400)
  }}


  useEffect(() => {
    try{
     if(localStorage.getItem("flag") !== ""){
       setFlag(JSON.parse(localStorage.getItem("flag")));
      } 
    } catch(err) {
      console.log(err);
    }
    /* eslint-disable */
  }, [])
/* eslint-disable */

  useEffect(() => {
    localStorage.setItem("flag", JSON.stringify(flag))
  }, [flag])


  return (
    <div className="category-bubbles">
      <div className="bubbleGroupWrapper">
        <button className="category-container" onClick={() => redir("tops")}>
          <img src={Top} alt="Tops" />
          <span>Tops</span>
        </button>

        <button className="category-container" onClick={() => redir("faldas")}>
          <img src={Falda} alt="Faldas" />
          <span>Faldas</span>
        </button>
        <button className="category-container" onClick={() => redir("vestidos")}>
          <img src={Vestido} alt="Vestidos" />
          <span>Vestidos</span>
        </button>
        <button className="category-container" onClick={() => redir("abrigos")}>
          <img src={Abrigo} alt="Abrigos" />
          <span>Abrigos</span>
        </button>

        <button className="category-container" onClick={() => redir("camisas")}>
          <img src={Camisa} alt="Camisas" />
          <span>Camisas</span>
        </button>
        <button className="category-container" onClick={() => redir("jardinero")}>
          <img src={Jardinero} alt="Jardinero" />
          <span>Jardineros</span>
        </button>
      </div>
    </div>
  );
}