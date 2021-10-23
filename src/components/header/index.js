import style from "./style.module.css";

const Header = () => {
  return (
    <div>
        <div className={style.header}>
            <h1 className={style.container}>Shopping Store</h1>
            <input className={style.searchBox} type="search" placeholder="Search" />
            <h1 className={style.cartStyle}>cart</h1>
        </div>
    </div>
  );
};

export default Header;
