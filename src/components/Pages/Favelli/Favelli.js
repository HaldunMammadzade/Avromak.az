import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Favelli = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid">
        <section className="flour">
          <h2>FAVELLİ</h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src={Image.favelli3} alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>{t("favelli1")}:</p>
                <span>{t("favelli2")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli3")}:</p>
                <span>{t("favelli4")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli5")}:</p>
                <span>{t("favelli6")}</span>
              </div>

              <div className="p-5">
                <p>{t("favelli7")}:</p>
                <span><strong>{t("favelli8")}:</strong> 0.8</span><br/>
                <span><strong>{t("favelli9")}:</strong> 12.0</span><br/>
                <span><strong>{t("favelli10")}:</strong> 68.5</span><br/>
                <span><strong>{t("favelli11")}:</strong> 321.2</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Favelli {t("Products")}</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.favelli4} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ CONCHIGLIE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.favelli5} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ STORTELLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.favelli6} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.favelli7} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ PIPE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.favelli8} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.favelli9} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FARFALLINE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.favelli10} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.favelli11} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FUSILLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.favelli12} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FARFALLE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.favelli13} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.favelli14} alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Favelli;
