import React, { useEffect, useRef } from 'react';
import Image from "../../../assets/img/Images";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
// import useTranslation from "next-translate/useTranslation";
// import i18nConfig from "../i18n.json";


export default function Home() {
    const {t} = useTranslation()
    const pageslider = React.createRef();
    const mainslider = React.createRef();
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        
      ],
    };
  
    const settings2 = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const next = () => {
      mainslider.current.slickNext();
  }
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="d-flex align-items-center section-content">
              <div className="animated fadeInLeft">
                <h1>{t("homeTitle")}</h1>
              </div>
              <div>
              <img onClick={()=>{next()}}  className="main-arrow " src={Image.arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="position-relative marquee-container container-fluid">
            <div className="marquee d-flex justify-content-around">
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
              <span>&#x2022;{t("partner")}</span>
            </div>
          </div>
        </section>
  
        <section>
          <div className="about-cover mb-5 ">
          <Slider
            className="align-items-center w-100"
            ref={(slider1) => (mainslider.current = slider1)}
            {...settings2}
          >
            <img className="main-arrow w-100" src={Image.homeMain} alt="" />
            <img className="main-arrow w-100" src={Image.slider1} alt="" />
            <img className="main-arrow w-100" src={Image.slider2} alt="" />
            <img className="main-arrow w-100" src={Image.slider3} alt="" />
            <img className="main-arrow w-100" src={Image.slider4} alt="" />
          </Slider>
            
          </div>
          <div className="container-fluid mt-sm-5 mt-2 ">
            <div className="row section-content align-items-end">
              <div className="col-md-6 col-12">
                <img className="main-img w-100" src={Image.img1} alt="" />
              </div>
              <div className="col-md-6 col-12 ">
                <div>
                  <p>{t("home-text1")}</p>
                  <br />
                  <p>{t("home-text2")}</p>
                </div>
                <a href="" className="d-flex mt-5" style={{textTransform: 'uppercase'}}>
                {t("partner")}
                  <img className="ml-2" src={Image.arrowBlack} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
  
    
  
        <section className="container-fluid mb-5 main-products">
          <h2>{t("products")}</h2>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
              <img className="w-100" src={Image.img2} alt="" />
              <p>{t("meat")}</p>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Rosko
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Ustdad
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Dadim
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 position-relative">
              <img className="w-100" src={Image.img3} alt="" />
              <p>{t("makaron")}</p>
              <a
                href="/favelli"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Favelli
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
              <a
                href="/makara"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Makara
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
              <a
                href="butterfly"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Kelebek
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
              <a
                href="/rizzi"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Rizzi
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 position-relative">
              <img className="w-100" src={Image.img4} alt="" />
              <p>{t("flour")}</p>
              <a
                href="/flour"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Favelli Un
                <img
                  className="ml-2 object-fit"
                  src={Image.arrowBlack}
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
  
        <section className="brands my-5 pt-5 container-fluid">
          <div className="text-center">
            <h4>{t("brands")}</h4>
            <p>{t("brands-text")}</p>
          </div>
  
          <Slider
            className="align-items-center mt-5 brands"
            ref={(slider) => (pageslider.current = slider)}
            {...settings}
          >
            <img className="ml-2 object-fit " src={Image.brand1} alt="" />
            <img className="ml-2 object-fit " src={Image.brand2} alt="" />
            <img className="ml-2 object-fit " src={Image.brand3} alt="" />
            <img className="ml-2 object-fit " src={Image.brand4} alt="" />
            <img className="ml-2 object-fit " src={Image.brand5} alt="" />
            <img className="ml-2 object-fit " src={Image.brand6} alt="" />
            <img className="ml-2 object-fit " src={Image.brand7} alt="" />
            <img className="ml-2 object-fit " src={Image.brand4} alt="" />
          </Slider>
        </section>
  
        <section className="choose-us container-fluid">
          <div className="row ">
            <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
              <h2 style={{textTransform: "uppercase"}}>{t("choooseUs")}</h2>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
              <img src={Image.choose1} alt="" />
              <p>{t("techno")}</p>
              <span>{t("technoText")}</span>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
              <img src={Image.choose2} alt="" />
              <p>{t("exper")}</p>
              <span>{t("experText")}</span>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
              <img src={Image.choose3} alt="" />
              <p>{t("quality")}</p>
              <span>{t("qualityText")}</span>
            </div>
          </div>
        </section>
  
        <section className="catalog border-t border-b  container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 border-r py-5 catalog-button">
              <h2>{t("catalog")}</h2>
              <p>{t("catalogText")}</p>
              <button ><a href="../assets/docs/avromak.pdf" download >{t("download")}</a></button>
            </div>
            <div className="col-lg-9 col-sm-6 col-12 p-0">
              <img className="w-100" src={Image.img5} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }
   