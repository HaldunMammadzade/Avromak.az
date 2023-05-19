import React, {useEffect, useState} from 'react';
import Image from "../../../assets/img/Images";
import {Link} from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';

// import Badge from '@material-ui/core/Badge';
import Lang from '../../Elements/Lang/Lang';
import { useTranslation } from 'react-i18next';
function Header(props) {
    const [scroll, setScroll] = useState(false)
    const {t} = useTranslation()

    

    const scrollFunc = () => {
        window.onscroll = function () {
            if (window.pageYOffset >= 10) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };
    }
    useEffect(() => {
        scrollFunc()
    })
    return (
        <>
      <header
        className={`header  justify-content-between align-items-center  ${
          props.isWhite ? "white " : ""
        } ${scroll ? "active " : " "}  `}
      >
        <a type="button" href="/" className="cursor-pointer">
          <div>
          <img  className="cursor" src={Image.Logo} alt="" />
          </div>
        </a>
        

        <Lang/>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        
        
        <div className="menu align-items-center  position-relative">
          <ul className="p-0 nav-links my-lg-0 my-5 animated fadeInRightBig">
            <li>
              <a href="/about-us" className="d-flex align-items-baseline">
              {t("about")}
              <img className="ml-4" src={Image.headerArrow} alt=""/>
              </a>
            </li>
            <li>
              <a href="/production" className="d-flex align-items-baseline"> {t("prod")}
              <img className="ml-4" src={Image.headerArrow} alt=""/></a>
            </li>
            <li>
              <a href="/retail" className="d-flex align-items-baseline">{t("retail")}
              <img className="ml-4" src={Image.headerArrow} alt=""/></a>
            </li>
            <li>
              <a href="/export" className="d-flex align-items-baseline"> {t("export")} <img className="ml-4" src={Image.headerArrow} alt=""/> </a>
            </li>
            <li>
              <a href="/contact" className="d-flex align-items-baseline">{t("contactUs")} <img className="ml-4" src={Image.headerArrow} alt=""/></a>
            </li>
          </ul>

        </div>
      </header>
    </>
    );
}

export default Header;
