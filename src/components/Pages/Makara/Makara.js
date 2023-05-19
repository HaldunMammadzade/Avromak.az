import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Makara = () => {
  const { t } = useTranslation();

  return (
    <>
        <div className="container-fluid">
        <section className="flour">
          <h2>Makara</h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src={Image.makara1} alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>{t("favelli1")}:</p>
                <span>{t("makara1")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli3")}:</p>
                <span>{t("makara2")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli5")}:</p>
                <span>{t("makara3")}</span>
              </div>

              <div className="p-5">
                <p>{t("favelli7")}:</p>
                <span><strong>{t("favelli8")}:</strong> 1.3</span><br/>
                <span><strong>{t("favelli9")}:</strong> 10.7</span><br/>
                <span><strong>{t("favelli10")}:</strong> 68.4</span><br/>
                <span><strong>{t("favelli11")}:</strong> 328.1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Makara {t("Products")}</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.makara2}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara FUSILLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.makara3}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara CONCHIGLIE </p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.makara4}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.makara5}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src={Image.makara6}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara STORTELLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src={Image.makara7}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara PIPE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.makara8}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.makara9}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src={Image.makara10}  alt="" />
              <p className="border-t m-0 py-3 px-3">Makara Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Makara;