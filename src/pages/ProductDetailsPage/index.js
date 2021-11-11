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
            

              <Link to="/cart">
              <button className={style.cartButton} type="button">
                Goto cart
              </button>
              </Link>
            </div>
          </div>

          <div className={style.productDetails}>
            <p>{productDetails ? productDetails.title : "NaN"} </p>
            <p>{productDetails ? `Price: ${productDetails.price}` : "NaN"} </p> <br />
            <p>{productDetails ? `Category:  ${productDetails.category}` : "NaN"}</p>
            <br />
            <ul>
            <li>Description</li>
            <li> {productDetails ? productDetails.description : "NaN"} </li>
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
