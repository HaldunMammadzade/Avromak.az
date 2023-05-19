import React, {useEffect, useState} from 'react';
import Image from "../../../assets/img/Images";
import {Link} from "react-router-dom";

import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t} = useTranslation();
    return (
      <div className="footer mt-5">
        <div className="footer-img d-flex ">
          <div className="d-sm-block d-none">
            <img src={Image.footer1} alt="" />
          </div>
          <div>
            <img src={Image.footer2} alt="" />
          </div>
          <div>
            <img src={Image.footer3} alt="" />
          </div>
          <div>
            <img src={Image.footer4} alt="" />
          </div>
          <div className="d-sm-block d-none">
            <img src={Image.footer5} alt="" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="my-3">AVROMAK</h1>
          <div className="d-flex footer-flex justify-content-between ">
            <div className="d-flex menu-link">
              <a href="/about-us" className="mr-sm-4 mr-2">
                {t("about")}
              </a>
              <a href="/production" className="mr-sm-4 mr-2">
              {t("prod")}
              </a>
              <a href="/retail" className="mr-sm-4 mr-2">
              {t("retail")}
              </a>
              <a href="/export" className="mr-sm-4 mr-2">
              {t("export")}
              </a>
              <a href="/contact"> {t("contactUs")}</a>
            </div>
            <div className="d-md-none d-flex footer-address justify-content-between info mt-sm-5 mt-3 pt-sm-4 pt-0 pb-4">
              <div className="d-sm-flex d-block company-info align-items-center mb-sm-0 mb-3">
                <span className="mr-2">{t("contact4")}:</span>
                <p className="m-0">
                {t("contact6")} <br />
                {t("contact7")}
                </p>
              </div>
  
              <div className="d-sm-flex d-block  company-info align-items-center mb-sm-0 mb-3">
                <span className="mr-2">{t("hours")}:</span>
                <p className="m-0">08.00 – 17:00/{t("week")}</p>
              </div>
  
              <div className=" d-sm-flex d-block  company-info align-items-center mb-sm-0 mb-3">
                <span className="mr-2">{t("contact2")}: </span>
                <p className="m-0">office@avromak.az</p>
              </div>
  
              <div className="d-sm-flex d-block  company-info align-items-center mb-sm-0 mb-3">
                <span className="mr-2">{t("phone")}: </span>
                <p className="m-0">(+994) 012 310 11 16</p>
              </div>
            </div>
            <div className="d-md-flex d-none">
              <a
                target="_blank"
                href="https://www.instagram.com/avromak_mmc/"
                className="mr-sm-4 mr-2 d-flex"
              >
                Instagram
                <img className="ml-1" src={Image.arrowFooter} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/avromak/"
                className="mr-sm-4 mr-2 d-flex"
              >
                Facebook
                <img className="ml-1" src={Image.arrowFooter} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/avromak/"
                className="mr-sm-4 mr-2 d-flex"
              >
                Twitter
                <img className="ml-1" src={Image.arrowFooter} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/avromak/"
                className="d-flex"
              >
                Linkedin
                <img className="ml-1" src={Image.arrowFooter} alt="" />
              </a>
            </div>
          </div>
  
          <div className="d-md-flex d-none footer-address justify-content-between info mt-sm-5 mt-3 pt-sm-4 pt-0 footer-border pb-4">
            <div className="d-flex align-items-center ">
              <span className="mr-2">{t("contact4")}:</span>
              <p className="m-0">
              {t("contact6")} <br />
              {t("contact7")}
              </p>
            </div>
  
            <div className="d-flex align-items-center">
              <span className="mr-2">{t("hours")}:</span>
              <p className="m-0">08.00 – 17:00/{t("week")}</p>
            </div>
  
            <div className="d-flex align-items-center">
              <span className="mr-2">{t("contact2")}: </span>
              <p className="m-0">office@avromak.az</p>
            </div>
  
            <div className="d-flex align-items-center">
              <span className="mr-2">{t("phone")}: </span>
              <p className="m-0">(+994) 012 310 11 16</p>
            </div>
          </div>
  
          <div className="d-md-none d-flex justify-content-between footer-border pb-3">
            <a
              target="_blank"
              href="https://www.instagram.com/avromak_mmc/"
              className="mr-sm-4 mr-2 d-flex"
            >
              Instagram
              <img className="ml-1" src={Image.arrowFooter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/avromak/"
              className="mr-sm-4 mr-2 d-flex"
            >
              Facebook
              <img className="ml-1" src={Image.arrowFooter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/avromak/"
              className="mr-sm-4 mr-2 d-flex"
            >
              Twitter
              <img className="ml-1" src={Image.arrowFooter} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/avromak/"
              className="d-flex"
            >
              Linkedin
              <img className="ml-1" src={Image.arrowFooter} alt="" />
            </a>
          </div>
  
          <div className="d-flex justify-content-between my-4 copy-writer">
            <p>{t("copy")}</p>
            <p>{t("copy2")}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;