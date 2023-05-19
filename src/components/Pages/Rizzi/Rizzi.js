import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Rizzi = () => {
  const { t } = useTranslation();

  return (
    <>
       <div className="container-fluid">
        <section className="flour">
          <h2>Pasta di Rizzi </h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src={Image.rizzi1} alt="" />
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
                <span><strong>{t("favelli8")}: </strong>1.3</span><br/>
                <span><strong>{t("favelli9")}: </strong>10.7</span><br/>
                <span><strong>{t("favelli10")}: </strong>68.4</span><br/>
                <span><strong>{t("favelli11")}: </strong>328.1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Pasta di Rizzi {t("Products")}</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi2} alt="" />
              <p className="border-t m-0 py-3 px-3">Pasta di Rizzi CONCHIGLIE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi3} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI FARFALLE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi4} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi5} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi6} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.rizzi7} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.rizzi8} alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI  FUSILLI</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rizzi;
