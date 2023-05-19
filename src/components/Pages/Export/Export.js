import React from "react";
import {useTranslation} from "react-i18next";
// import i18nConfig from "../../i18n.json";
import Image from "../../../assets/img/Images";
// const { locales } = i18nConfig;

const Export = () => {
    const {t} = useTranslation()

  return (
    <>

      <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">{t("exportTitle")}</h2>
          <img className="w-100 pt-4" src={Image.export1} alt="" />
        </section>

        <section className="export overflow-hidden mt-5 mb-5">
          <div className="row border-t border-b ">
            <div className="col-md-5 col-12 border-r border-b py-4">
              <h2>{t("exportText1")}</h2>
            </div>

            <div className="col-md-7 col-12 py-4 border-b">
              <p>{t("exportText2")}</p>

              <p>{t("exportText3")}</p>
            </div>

            <div className="col-md-5 col-12 border-r py-4">
              <img className="w-100" src={Image.export2} alt="" />
            </div>

            <div className="col-md-7 col-12 py-5 px-sm-5 px-3 ">
              <h2>{t("exportForm")}</h2>
              <div className="form mt-4">
                <form action="">
                  <div className="d-sm-flex justify-content-between mb-sm-5 mb-3">
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 mr-sm-5 pb-2"
                        type="text"
                        name="name"
                        placeholder={t("form1")}
                      />
                    </label>
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 ml-sm-5 pb-2"
                        type="text"
                        name="surname"
                        placeholder="Soyad"
                      />
                    </label>
                  </div>

                  <div className="d-sm-flex justify-content-between mb-sm-5 mb-3">
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 mr-sm-5 pb-2"
                        type="mail"
                        name="mail"
                        placeholder="Email"
                      />
                    </label>
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 ml-sm-5 pb-2"
                        type="text"
                        name="country"
                        placeholder="Ölkə"
                      />
                    </label>
                  </div>

                  <div className="d-sm-flex justify-content-between mb-sm-5 mb-3">
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 mr-sm-5 pb-2"
                        type="text"
                        name="Brand"
                        placeholder="Brand"
                      />
                    </label>
                    <label className="w-100 mb-sm-0 mb-3">
                      <input
                        className="w-100 ml-sm-5 pb-2"
                        type="text"
                        name="text"
                        placeholder="Qablaşdırma"
                      />
                    </label>
                  </div>
                  <textarea className="w-50" placeholder="Mesajınız" />
                </form>
                <button type="submit" className="mt-sm-5 mt-3">
                {t("send")}
                </button>

                <p className="mt-sm-5 mt-3">{t("exportForm1")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Export;