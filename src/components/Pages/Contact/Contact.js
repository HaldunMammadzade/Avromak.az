import React from "react";
import { useTranslation } from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
       <div className="container-fluid">
        <section className="contact ">
          <h2 className="">{t("contactUs")}</h2>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="form mt-4">
                <form action="">
                  <div className="mb-sm-4 mb-2 inputs">
                    <label>{t("contact1")}</label>
                    <input
                      className="mr-sm-5 p-2"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="mb-sm-4 mb-2 inputs">
                    <label>{t("contact2")} </label>
                    <input
                      className="mr-sm-5  p-2"
                      type="mail"
                      name="name"
                    />
                  </div>

                  <div className="mb-sm-4 mb-2 inputs">
                    <label>{t("contact3")}</label>
                    <textarea
                      className="mr-sm-5 p-2"
                      type="text"
                      name="name"
                    />
                  </div>
                </form>
                <button type="submit" className="mt-sm-3 ">
                {t("send")}
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-sm-0 mt-5">
              <div className="d-flex align-items-center mb-sm-4 mb-2">
                <p className="mb-0 mr-5 pr-5">{t("contact4")}</p>
                <span className="border-b pb-3 w-100">
                {t("contact6")}
                  <br /> {t("contact7")}
                </span>
              </div>

              <div className="d-flex  align-items-center mb-sm-4 mb-2">
                <p className="mb-0 mr-5 pr-5"> {t("contact5")}</p>
                <span className="border-b pb-3 w-100">
                  +994 55 226 68 88 <br /> +994 12 310 11 16 <br /> +994 55 510
                  24 21
                </span>
              </div>

              <div className="d-flex align-items-center mb-sm-4 mb-2">
                <p className="mb-0 mr-5 pr-5"> {t("contact8")}</p>
                <span className="border-b pb-3 w-100">
                  info@avromak.az
                  <br />
                  export@avromak.az
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
