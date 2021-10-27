import Footer from "../../components/footer";
import Header from "../../components/header";
import style from "./style.module.css";

const ProductDetailsPage = () => {
  return (
    <div>
      <Header />

      <div className={style.allProduct}>
        <div className={style.productShowDiv}>
          <img
            className={style.productImageStyle}
            src="https://5.imimg.com/data5/SELLER/Default/2021/4/OK/AE/HI/14160492/better-orenge-grafted-plant-500x500.jpg"
            alt="image not found"/>

          <div className = {style.ButtonsStyle}>
            <button className={style.buyButton} type="button">
              Buy
            </button>
            <button className={style.cartButton} type="button">
              Goto cart
            </button>
          </div>

        </div>

        <div className={style.productDetails}>
          <p>Product title is oppo 367A </p>
          <p>price is $40 </p> <br />
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptatem non rerum assumenda. Mollitia animi atque ex accusantium
            voluptatum. Reiciendis nesciunt dignissimos deleniti dolorem. Sint
            vitae ullam dolorum quam dolore?
          </p><br />
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

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
