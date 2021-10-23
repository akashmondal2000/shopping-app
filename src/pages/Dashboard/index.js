import style from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Dashboard = () => {
  return (
    <div>
    <Header/>


      <div className={style.itemStyle}>
        <img
          className={style.imageStyle}
          src="https://5.imimg.com/data5/SELLER/Default/2021/4/OK/AE/HI/14160492/better-orenge-grafted-plant-500x500.jpg"
          alt="image not found"
        />
        <p className={style.descriptionStyle}>Description</p>
        <p>$40</p>
        <button type="button">add</button>{" "}
      </div>
      <Footer/>

     
    </div>
  );
};

export default Dashboard;
