/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import "../components/i18n"
import "../styles/terminal.css"
import "../styles/styles.css"


export default function Terminal() {
    const {t, i18n} = useTranslation("")
    const vnNewsStyle = {
        background: "#FDFACF",
    }
    const contactFormStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const vnNews = (languageCode: string) => {
        if (languageCode.includes("vi")) {
            return (
                <>
                    <section className="section vn-newsletter" style={vnNewsStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div>
                                       <h6 className ="text-dark mb-40"> {t("vnNewsLetter.vnnews")
                                            .split("\n")
                                            .map((i, key) => {
                                                return (
                                                    <p key={key}>
                                                        <span>{i}</span>
                                                    </p>
                                                )
                                            })} </h6>   
                                        <div className="text-center">
                                            <Link to="/" className="btn-outline">
                                                {t("vnNewsLetter.vnnewsbutton")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2"></div>
                                <div className="col-lg-6 col-md-12 flex">
                                    <div className="p-5 contact-form" style = {contactFormStyle}>
                                        <form
                                            method="POST"
                                            action="https://formspree.io/magicfx@cjcmarkets-svg.com"
                                            className="row">
                                            <div className="col-lg-12">
                                                <h5 className="text-dark mb-40">{t("vnNewsLetter.vnnewtittle")}</h5>
                                            </div>
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder={t("vnNewsLetter.vnnewsname")}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder={t("vnNewsLetter.vnnewsemail")}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="form-control"
                                                    placeholder={t("vnNewsLetter.vnnewsphone")}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn-outline text-center" type="submit" value="send">
                                                    {t("vnNewsLetter.vnnewssubscr")}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    }
    return <>{vnNews(i18n.language)}</>
}
