import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/img/Images";
import {useTranslation} from "react-i18next";
function About() {
    const {t} = useTranslation()
  return (
    <>
      <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">{t("aboutDesc")}</h2>
          <div className="row">
            <div className="col-lg-4 col-12"></div>

            <div className="col-lg-8 col-12">
              <img className="pt-4 w-100" src={Image.about1} alt="" />
              <p className="w-100 pr-5 mt-lg-5 mt-3">{t("aboutDesc1")}</p>
              <p className="w-100 pr-5">{t("aboutDesc2")}</p>
            </div>
          </div>
        </section>

        <section className="export overflow-hidden mt-5">
          <div className="row border-t border-b export-1 my-sm-4 my-2 py-3">
            <div className="col-md-4 col-12 py-4">
              <h2>{t("vision")}</h2>

              <p className="mr-0">{t("visionText1")}</p>

              <p className="mr-0">{t("visionText2")}</p>
            </div>

            <div className="col-md-8 col-12 py-4 ">
              <img className="w-100" src={Image.about2} alt="" />
            </div>
          </div>

          <div className="row border-b  my-sm-4 my-2 py-3">
            <div className="col-md-8 col-12 py-4">
              <img className="w-100" src={Image.about3} alt="" />
            </div>

            <div className="col-md-4 col-12  py-4">
              <h2>{t("mission")}</h2>

              <p className="mr-0">{t("missionText1")}</p>
              <p className="mr-0">{t("missionText2")}</p>
            </div>
          </div>

          <div className="row  border-b export-1  my-sm-4 my-2 py-3">
            <div className="col-md-4 col-12 py-4">
              <h2>{t("goal")}</h2>

              <p className="mr-0">{t("goalText1")}</p>
              <p className="mr-0">{t("goalText2")}</p>
            </div>

            <div className="col-md-8 col-12 py-4 ">
              <img className="w-100" src={Image.about4} alt="" />
            </div>
          </div>
        </section>

        <section className="production animated fadeInRightBig pb-4 mb-5 border-b">
          <h2 className="my-5 mr-sm-5 mr-0 pr-sm-5 pr-0">{t("aboutText")}</h2>

          <img className="w-100" src={Image.about5} alt="" />

          <p className="mt-lg-5 mt-3 ">{t("aboutText1")}</p>
        </section>
      </div>
    </>
  );
}

export default About;
