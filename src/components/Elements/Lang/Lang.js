import React, { useState, useEffect } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changeLanguage } from "../../../redux/actions";
import Image from '../../../assets/img/Images';

const Lang = (props) => {
    const [lang, setLang] = useState("az");
    let newLang = localStorage.getItem('locale')
    const changeLang = lang => {
        const { i18n } = props;
        localStorage.setItem("locale", lang);
        props.changeLanguage(lang);
        setLang(lang);
        // for creating new request
        setTimeout(() => {
            props.changeLanguage(lang);
        }, 10)
        window.location.reload()
    };

    useEffect(() => {
        setLang(
            localStorage.getItem("locale") ? localStorage.getItem("locale") : "az"
        );
    }, [lang])

    return (
        <form className="langs-element">
            <label>
                <input onClick={() => {
                    changeLang("az");
                }} type="radio" name="radio" />
                <span>AZ</span>
            </label>
            <label>
                <input onClick={() => {
                    changeLang("en");
                }} type="radio" name="radio" />
                <span>EN</span>
            </label>
            <label>
                <input onClick={() => {
                    changeLang("ru");
                }} type="radio" name="radio" />
                <span>RUS</span>
            </label>
        </form>
    );
}

export default connect(null, { changeLanguage })(withTranslation()(Lang));

