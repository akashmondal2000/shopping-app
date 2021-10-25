import { Icon } from '@iconify/react';
import style from "./styles.module.css";

const Footer = () => {
    return (
        <footer>

<div className={style.footerStyle}>
        <div className={style.footerFirstSection}>
          <div className={style.aboutStyle}>
            <p className={style.textStyle}>About</p>
            <p className={style.aboutContainer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              consequuntur sapiente expedita pariatur placeat distinctio eveniet
              at impedit doloribus, praesentium, magnam quidem maxime rem quasi
              porro aliquid ex qui nobis.
            </p>
          </div>

          <div className={style.contactStyle}>
            <p className={style.textStyle}>Contact</p>
            <div className={style.cotactWrapDiv}>
                <p className={style.contactContainer}>Mobile:-+919088123456</p>
                <p className={style.contactContainer}>Email:- abcd@gmail.com</p>
                <p className={style.contactContainer}>twitter:- abcde@twitter.co.in</p>
                <p className={style.contactContainer}>outlook :- efgh@outlook.com</p>
            </div>

          </div>

          <div className={style.helpStyle}>
            <p className={style.textStyle}>Help</p>
            <div className={style.help_Wrap_Div}>
            <p className={style.helpContainer}>Get answers from other Amazon customers on the Digital and Device Forum.</p>
            <p className={style.helpContainer}>Get answers from other Amazon customers email- abcd@gmail.com.</p>
            </div>
            
          </div>
        </div>

        <div className={style.footer_SecondSection}>
        <div className={style.icons_style}>

            <span className={style.allIcon_Style}>{<Icon icon="logos:facebook" />}</span>
            <span className={style.allIcon_Style}>{<Icon icon="logos:linkedin-icon" />}</span>
            <span className={style.allIcon_Style}>{<Icon icon="icon-park:github" />}</span>
            <span className={style.allIcon_Style}>{<Icon icon="ph:instagram-logo" color="#d36bbb" />}</span>

          </div>

        </div>
      </div>
            
        </footer>
    )
}

export default Footer
