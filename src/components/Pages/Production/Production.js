import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Production = () => {
  const { t } = useTranslation();

  return (
    <>
     <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">{t("prodText")}</h2>
          <img className="pt-4 w-100" src={Image.img6} alt="" />
          <p className="mt-4">{t("prodText1")}</p>
        </section>

        <section className="statics mt-md-5 mt-4">
          <div className="row justify-content-between align-items-center static border-b pb-2">
            <div className="col-lg-6 col-12  statics-div">
              <p className="m-0">12000 ha</p>
              <span>{t("area1")}</span>
            </div>
            <div className="col-lg-6 col-12  statics-div">
              <p className="m-0">2500 m²</p>
              <span>{t("area2")}</span>
            </div>
          </div>
        </section>

        <section className="mb-5 main-products">
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
            <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
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
                href="/butterfly"
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
            <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
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

        <section className="mb-5 private-label">
          <h2>{t("privateLabel")}</h2>
          <div className="private-label-cover row align-items-center w-100 m-0">
            <div className="col-lg-3 col-sm-6 col-12 p-0">
              <img
                
                src={Image.label1}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-lg-5 col-sm-6 col-12 p-0">
              <img
                
                src={Image.label2}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <img
               
                src={Image.label3}
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <p className="mt-5">{t("privateLabelText")}</p>
        </section>
      </div>
    </>
  );
};

export default Production;
