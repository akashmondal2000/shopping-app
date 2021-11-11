import Header from "../../components/header";
import Footer from "../../components/footer";
import cartStyle from "./cartStyle.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = ({ id }) => {
  const [store, setStore] = useState();

  useEffect(() => {
    const cartItemIds = JSON.parse(localStorage.getItem("id"));
    console.log("cartitemId", cartItemIds);

    cartItemIds.map((id) => {
      getProductCart(id);
    });
  });
  
  const getProductCart = async (id) => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(responce);
  };

  return (
    <div>
      <Header />


      <div className={cartStyle.firstProductSection}>
        <div className={cartStyle.imageAndPrice}>
          <div>
            <img
              className={cartStyle.CartImage}
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/OK/AE/HI/14160492/better-orenge-grafted-plant-500x500.jpg"
              alt="No image found"
            />
          </div>
          <div className={cartStyle.ProductPrice}>
            <p>Product Name</p>
            <p>Price $120</p>
            <br />
            {/* Add Button and less button */}
            <button type="button">+</button>
            <span className={cartStyle.ItemCount}>1</span>
            <button type="button">-</button>
          </div>
        </div>

        {/* toatlSection */}

        <div className={cartStyle.Totalsection}>
          <div className={cartStyle.productNamePrice}>
            <p className={cartStyle.ProductNameTotalSection}>Product Name</p>
            <p>Price $120</p>
          </div>
          <div className={cartStyle.productNamePrice}>
            <p className={cartStyle.ProductNameTotalSection}>Product1 Name</p>
            <p>Price $120</p>
          </div>
          <div className={cartStyle.productNamePrice}>
            <p className={cartStyle.ProductNameTotalSection}>Discount</p>
            <p>Price $80</p>
          </div>
          <div className={cartStyle.productNamePrice}>
            <p className={cartStyle.ProductNameTotalSection}>Total Price</p>
            <p>price $120</p>
          </div>
        </div>
      </div>

      {/* PlaceOrder Button */}
      <div className={cartStyle.OrderButton}>
        <button className={cartStyle.PlaceorderButton} type="button">
          Place Order
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
