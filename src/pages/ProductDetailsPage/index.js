import Footer from "../../components/footer";
import Header from "../../components/header";
import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState(null);

  const search = useLocation().search;
  const productId = new URLSearchParams(search).get("id");

  const getProductDetails = async (id) => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(responce);
    setProductDetails(responce.data);
  };

  useEffect(() => {
    if (productId) {
      getProductDetails(productId);
    }
  }, [productId]);
  return (
    <div>
      <Header />

      {productId ? (
        <div className={style.allProduct}>
          <div className={style.productShowDiv}>
            <img
              className={style.productImageStyle}
              src={
                productDetails
                  ? productDetails.image
                  : "https://bitsofco.de/content/images/2018/12/broken-1.png"
              }
              alt="image not found"
            />

            <div className={style.ButtonsStyle}>
              <button className={style.buyButton} type="button">
                Buy
              </button>
              <button className={style.cartButton} type="button">
                Goto cart
              </button>
            </div>
          </div>

          <div className={style.productDetails}>
            <p>{productDetails ? productDetails.title : "NaN"} </p>
            <p>price is $40 </p> <br />
            <p>Description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatem non rerum assumenda. Mollitia animi atque ex
              accusantium voluptatum. Reiciendis nesciunt dignissimos deleniti
              dolorem. Sint vitae ullam dolorum quam dolore?
            </p>
            <br />
            <p>Specification</p>
            <ul>
              <li>abcg</li>
              <li>gggjfgjg</li>
              <li>jghjdhg</li>
              <li>khgjhsg</li>
              <li>jkhgjhgghh</li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <h1>No product selected</h1>
          <Link to="/">
            <button>Go Back to dashboard</button>
          </Link>
        </>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
