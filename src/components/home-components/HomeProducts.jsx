import "../../styles/homeProducts.css";
import NewestProduct from "./NewestProduct";
import Popular from "./Popular";
import { useSelector } from "react-redux";
import VideoSwiper from "./VideoSwiper";

export default function HomeProducts() {
  const allProducts = useSelector((state) => state.allProducts);
  const allStories = useSelector((state) => state.allStories);

  return (
    <div className="homeproducts-container">
      <div className="home-products">
        <NewestProduct allProducts={allProducts} />
        <Popular allProducts={allProducts} />
      </div>
      <VideoSwiper allStories={allStories} />
    </div>
  );
}
