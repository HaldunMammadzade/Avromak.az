import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Butterfly = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid">
        <section className="flour">
          <h2>Kelebek </h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src={Image.butterfly1} alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>{t("favelli1")}:</p>
                <span>{t("butterfly1")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli3")}:</p>
                <span>{t("butterfly2")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli5")}:</p>
                <span>{t("butterfly3")}</span>
              </div>

              <div className="p-5">
                <p>{t("favelli7")}:</p>
                <span>
                  <strong>{t("favelli8")}:</strong>1.0
                </span>
                <br />
                <span>
                  <strong>{t("favelli9")}:</strong>11.3
                </span>
                <br />
                <span>
                  <strong>{t("favelli10")}:</strong>65.9
                </span>
                <br />
                <span>
                  <strong>{t("favelli11")}:</strong>332,2
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Kelebek {t("Products")}</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly2} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK MIDYE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly3} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Spagetti</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly4} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Tel Şehriye</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly5} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Bukle</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly6} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Boru</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.butterfly7} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Burgu</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.butterfly8} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Kelebek</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.butterfly9} alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Fiyonk</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img
                className="px-4 w-100"
                src={Image.butterfly10}
                alt=""
              />
              <p className="border-t m-0 py-3 px-3">KELEBEK Kalem</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img
                className="px-4 w-100"
                src={Image.butterfly11}
                alt=""
              />
              <p className="border-t m-0 py-3 px-3">KELEBEK Mantı</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img
                className="px-4 w-100"
                src={Image.butterfly12}
                alt=""
              />
              <p className="border-t m-0 py-3 px-3">KELEBEK Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Butterfly;
