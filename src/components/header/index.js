import style from "./style.module.css";
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div>
        <header className={style.header}>
        
              <h1 className={style.container}>Shopping Store</h1>
              <input className={style.searchBox} type="search" placeholder="Search" />
              <span className={style.cartStyle}>cart<Icon icon="eva:shopping-cart-outline" color="white" /></span>
          
        </header>
    </div>
  );
};

export default Header;
