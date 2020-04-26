/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import cnBannerImg from "../images/banner/cn-banner.jpg"
import {Link} from "react-router-dom"
import "../styles/banner.css"

export default function Banner() {
    const {t, i18n} = useTranslation("")
    const bannerOneStyle: CSSProperties = {
        background: `linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 1, 40, 0.3)), url(${bannerDemoImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const cnBannerImgStyle: CSSProperties = {
        background: `url(${cnBannerImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const carouselTextStyle: CSSProperties = {
        zIndex: 2000,
    }
    const cnBanner = (languageCode: string) => {
        if (languageCode.includes("zh")) {
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={cnBannerImgStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12 text-left">
                                        <h2 className="text-red" style={{fontWeight: "bold"}}>
                                            赠金活动
                                        </h2>
                                        <h4 className="text-cream mb-20">2020年3月1日-2020年6月1日</h4>
                                        <h4 className="text-white mb-20">
                                            30%赠金额度力度空前
                                            <br />
                                            单账户最高可达三万美金
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-left">
                                        <Link to="/promotion-cn" className="btn-outline">
                                            了解活动细则
                                        </Link>
                                        <p className="text-red">本活动仅限中国大陆客户参与</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        } else {
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        }
    }

    return <>{cnBanner(i18n.language)}</>
}
