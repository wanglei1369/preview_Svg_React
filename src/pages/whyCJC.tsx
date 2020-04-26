/** @format */

import React from "react"
import "../components/i18n"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/whyCJC/banner.jpg"
import advantage1Image from "../images/whyCJC/advantage1.png"
import advantage2Image from "../images/whyCJC/advantage2.png"
import advantage3Image from "../images/whyCJC/advantage3.png"
import advantage4Image from "../images/whyCJC/advantage4.png"
import advantage5Image from "../images/whyCJC/advantage5.png"
import advantage6Image from "../images/whyCJC/advantage6.png"

export default function WhyCJC() {
    const {t} = useTranslation("")
    const pageTitle = t("whyCJC.whyCjcTitle") + " | Carrick Just Capital"
    const pageDesc = t("whyCJC.whyCjcMessage")
    const iconStyle = {
        width: "12%",
    }
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("whyCJC.whyCjcTitle")}>
                <section className="product section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 text-center mb-50 px-5">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage1Image}
                                    alt="advantage1Image"
                                />
                                <h5>{t("whyCJC.advantage.superiorExecution")}</h5>
                                <p>{t("whyCJC.advantage.superiorExecutionMessage")}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center mb-50 px-5">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage2Image}
                                    alt="advantage1Image"
                                />
                                <h5>{t("whyCJC.advantage.aWideRangeOfProducts")}</h5>
                                <p>{t("whyCJC.advantage.aWideRangeOfProductsMessage")}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center mb-50 px-5">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage3Image}
                                    alt="advantage1Image"
                                />
                                <h5>{t("whyCJC.advantage.latestTechnologyPlatform")}</h5>
                                <p>{t("whyCJC.advantage.latestTechnologyPlatformMessage")}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center mb-50 px-5">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage4Image}
                                    alt="advantage1Image"
                                />
                                <h5>{t("whyCJC.advantage.NDDTrading")}</h5>
                                <p>{t("whyCJC.advantage.NDDTradingMessage")}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center mb-50 px-5">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage5Image}
                                    alt="advantage1Image"
                                />
                                <h5> {t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCosts")}</h5>
                                <p>{t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCostsMessage")}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-center">
                                <img
                                    className="img-fluid mb-3"
                                    style={iconStyle}
                                    src={advantage6Image}
                                    alt="advantage1Image"
                                />
                                <h5>{t("whyCJC.advantage.eminentCustomerService")}</h5>
                                <p>{t("whyCJC.advantage.eminentCustomerServiceMessage")}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
