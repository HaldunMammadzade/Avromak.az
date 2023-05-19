import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Retail = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid mb-sm-5 mb-3 pb-sm-5 mb-3">
        <section className="animated fadeInRightBig row align-items-end meats-main">
          <div className="col-sm-4 col-12">
            <h1>{t("retailTitle")}</h1>
            <p className="mb-0 mt-4">{t("retailText1")}</p>
          </div>

          <div className="col-sm-8 col-12 pr-0">
            <img className="w-100" src={Image.retail1} alt="" />
          </div>
        </section>
      </div>

      <section className="choose-us container-fluid ">
        <div className="row rublevski">
          <div className="col-sm-6 col-12 d-flex align-items-center justify-content-between rublevski-logo">
            <img
              className="object-fit mr-4"
              src={Image.rublevski}
              alt=""
            />
            <h2 className="m-0">{t("retailText2")}</h2>
          </div>

          <div className="col-sm-6 col-12 d-flex flex-column rublevski-content">
            <span>{t("retailText3")}</span>
            <div className="mt-3">
            <button ><a href="/docs/rublevsky.pdf" download >{t("download")}</a></button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 main-products container-fluid">
        <h2>{t("branches")}</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
            <img className="w-100" src={Image.retail2} alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              {t("branch1")}
            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              {" "}
              {t("branch2")}
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            {t("branch3")}
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
            <img className="w-100" src={Image.retail3} alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              {t("branch4")}
            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            {t("branch5")}
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            {t("branch6")}

            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
            <img className="w-100" src={Image.retail4} alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              {t("branch7")}

            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              {" "}
              {t("branch8")}
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            {t("branch9")}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retail;
