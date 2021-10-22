import style from "./styles.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={style.header}>
        <h1 className={style.container}>Shopping Store</h1>
        <input className={style.searchBox} type="search" placeholder="Search" />
        <h1 className={style.cartStyle}>cart</h1>
      </div>

      <div className = {style.itemStyle}>
          <img className={style.imageStyle} src="https://5.imimg.com/data5/SELLER/Default/2021/4/OK/AE/HI/14160492/better-orenge-grafted-plant-500x500.jpg" 
          alt="image not found" />

          <p className ={style.descriptionStyle}>Description</p>
          <p>$40</p>
          <button type = "button">add</button>
      </div>
    </div>
  );
};

export default Dashboard;
