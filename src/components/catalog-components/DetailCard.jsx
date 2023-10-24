import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearProductDetail,
  getFavorites,
  getProductDetail,
} from "../../actions";
import "../../styles/detailCard.css";
import Navbar from "../shared-components/Navbar";
import MobileNavbar from "../shared-components/MobileNavbar";
import Ticker from "../shared-components/Ticker";
import TransitionIn from "../../components/shared-components/TransitionIn";
import TransitionOut from "../../components/shared-components/TransitionOut";
import Footer from "../shared-components/Footer";
import { Toaster, toast } from "react-hot-toast";

export default function DetailCard({ screenTransition, setScreenTransition }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const allProducts = useSelector((state) => state.allProducts);
  const favProducts = useSelector((state) => state.favoriteProducts);
  const [activeIndex, setActiveIndex] = useState(false)

  const [previewImage, setPreviewImage] = useState();
  const { id } = useParams();
  const [others, setOthers] = useState([]);

  const noDetailArr = allProducts.filter((x) => x.id !== productDetail?.id);
  const othersArr = noDetailArr.sort(() => Math.random() - 0.5).slice(0, 6);

  useEffect(() => {
    setScreenTransition(false);
    /* eslint-disable */
  }, []);
/* eslint-disable */

  useEffect(() => {
    setOthers(othersArr);
    /* eslint-disable */
  }, [productDetail]);
/* eslint-disable */

  useEffect(() => {
    setTimeout(() => {
      setPreviewImage(
        productDetail.image?.length > 1 ? productDetail.image[0] : ""
      );
    }, 1500);
  }, [productDetail?.image]);

  console.log(productDetail, "PDTL");

    useEffect(() => {
      dispatch(getProductDetail(allProducts, id));
      let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];
        dispatch(getFavorites(LSArray));
        return () => {
          dispatch(clearProductDetail());
        };
      }, [dispatch, id]);

  function handleClick(data) {
    let LSArray = JSON.parse(localStorage.getItem("Obj")) || [];
    let dataExists = LSArray.some((item) => item.id === data.id);
    if (!dataExists) {
      LSArray.push(data);
      dispatch(getFavorites(LSArray));
      localStorage.setItem("Obj", JSON.stringify(LSArray));
      toast.success(`${data.name} añadido a favoritos!`, {
        duration: 2000,
        style: { fontFamily: "Arial" },
      });
    }
    if (dataExists) {
      let filtered = LSArray.filter((item) => item.id !== data.id);
      dispatch(getFavorites(filtered));
      localStorage.setItem("Obj", JSON.stringify(filtered));
      toast.error(`${data.name} eliminado de favoritos!`, {
        duration: 2000,
        style: { fontFamily: "Arial" },
      });
    }
  }
  const LoadCurtain = async (e) => {
    setScreenTransition(!screenTransition);
    setTimeout(() => {
      setScreenTransition(!screenTransition);
      window.location.href = e;
    }, 2000);
  };


  return (
    <div>
      {screenTransition ? <TransitionOut /> : <TransitionIn />}
      <Ticker />
      <Navbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
      <MobileNavbar
        screenTransition={screenTransition}
        setScreenTransition={setScreenTransition}
      />
       <Toaster position="bottom-center" reverseOrder={false} />
      <div className="detail">
        <div className="box">
          <div className="detail-link">
            <span>
              <button onClick={() => LoadCurtain("/")}>Inicio</button>{" "}
              <span>/</span>{" "}
              <button onClick={() => LoadCurtain("/catalogo")}>Catalogo</button>{" "}
              <span> / </span> <span>{productDetail?.name}</span>
            </span>
          </div>
          {productDetail ? (
            <>
              <div className="detail-box">
                <div className="image-box">
                  <div className="detail-imgs">
                    {productDetail.image?.length > 1
                      ? productDetail.image?.map((arrimg, index) => (
                          <div className="arrimgs" key={index}>
                            <img
                              className={
                                arrimg === previewImage ? null : "inactive"
                              }
                              draggable="false"
                              src={arrimg}
                              alt=""
                              role="button"
                              onClick={() => setPreviewImage(arrimg)}
                            />
                          </div>
                        ))
                      : null}
                  </div>
                  <div className={` ${activeIndex ? `detail-zoom` : `prev-img`}`} key={previewImage} onClick={() => setActiveIndex(!activeIndex)}>
                    {previewImage === "" ? (
                      <img src={productDetail?.image[0]} alt="" />
                    ) : (
                      <img src={previewImage} alt="" />
                    )}
                  </div>
                </div>

                <div className="detail-wrapper">
            <h2>{productDetail.name}</h2>
                  <div className="detail-container">
                    {productDetail.price2 !== 0 ? (
                      <div className="detail-description">
                        <h3>Detalles del producto:</h3>
                        <p>{productDetail.description}</p>
                        <br />
                        <h1>ARS ${productDetail.price}</h1>
                        <br />
                        <p>{productDetail.description2}</p>
                        <h3>ARS ${productDetail.price2}</h3>
                      </div>
                    ) : (
                      <div>
                        <p>{productDetail.description}</p>
                        <p>{productDetail.description2 !== "" ? productDetail.description2 : null}</p>
                        <h1>ARS ${productDetail.price}</h1>
                      </div>
                    )}
                    {favProducts !== null && favProducts !== undefined &&
                    favProducts.some((prod) => prod.id === productDetail.id) ? (
                      <div className="favs-added">
                        <button onClick={() => handleClick(productDetail)}>
                          <img src="/ImgHelpers/FavAdded.png" alt="added fav" />
                        </button>
                      </div>
                    ) : (
                      <div className="add-favs">
                        <button onClick={() => handleClick(productDetail)}>
                          <img src="/ImgHelpers/AddFav.png" alt="add fav" />
                        </button>
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="other-items">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "65vw",
              marginLeft: "15px",
            }}
          >
            <h1>Otras prendas</h1>
          </div>
          <div className="cards-container" style={{width: "100%", margin: "0"}}>
            <div className="cards-grid">
              {others && others.length !== 0
                ? others.map((product) => (
                    <div className="product-card" key={product.id}>
                      <div className="card animate__animated animate__fadeInRight">
                        <a href={`/catalogo/${product.id}`}>
                          <img
                            src={
                              product.image.length !== 1
                                ? product.image[0]
                                : product.image
                            }
                            alt="product sample"
                          />
                          <div style={{margin: "0"}} className="card-body">
                            <h3>{product.name}</h3>
                          </div>
                        </a>
                        {favProducts !== null &&
                        favProducts.some((prod) => prod.id === product.id) ? (
                          <div className="favs-added">
                            <button onClick={() => handleClick(product)}>
                              <img
                                src="/ImgHelpers/FavAdded.png"
                                alt="added fav"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="add-favs">
                            <button onClick={() => handleClick(product)}>
                              <img src="/ImgHelpers/AddFav.png" alt="add fav" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
