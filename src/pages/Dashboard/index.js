import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/productCard";
import { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const getProducts = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    console.log(responce);
    setProducts(responce.data);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  console.log("products : ", products);

  return (
    <div>
      <Header />
      {products.length > 0
        ? products.map((item) => (
            <ProductCard
            key={item.id}
            id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.image}
            />
          ))
        : null}

      <Footer />
    </div>
  );
};

export default Dashboard;
