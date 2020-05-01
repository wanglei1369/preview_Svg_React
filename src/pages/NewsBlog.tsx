/** @format */

import React, {useState} from "react"
import "../components/i18n"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/platform/banner.jpg"
import {Link} from "react-router-dom"
import ReactPlayer from "react-player"

interface Props {
    highlightString: number
}

const VideoComponent = (languageCode: string) => {
    if (languageCode.includes("zh")) {
        return (
            <>
                <div className="text-center" style={{textAlign: "center"}}>
                    <ReactPlayer
                        url="/media/videos/svg-android-cn.mp4"
                        playing={false}
                        controls={true}
                        width={500}
                        style={{textAlign: "center"}}
                    />
                </div>
            </>
        )
    }
}
// const DownloadBadgeWindows = (languageCode: string) => {
//     if (languageCode.includes("vi")) {
//         return (
//             <>
//                 <Link to="/platform-download/goto/windows-vi">
//                     <img
//                         src={badgeWinVi}
//                         alt="logo of MT4 Windows Viet"
//                         className="img-fluid w-100 text-left align-bottom"
//                     />
//                 </Link>
//             </>
//         )
//     }
//     if (languageCode.includes("ko")) {
//         return (
//             <>
//                 <Link to="/platform-download/goto/windows">
//                     <img
//                         src={badgeWinKo}
//                         alt="logo of MT4 Windows"
//                         className="img-fluid w-100 text-left align-bottom"
//                     />
//                 </Link>
//             </>
//         )
//     }
//     if (languageCode.includes("zh")) {
//         return (
//             <>
//                 <Link to="/platform-download/goto/windows">
//                     <img
//                         src={badgeWinZh}
//                         alt="logo of MT4 Windows"
//                         className="img-fluid w-100 text-left align-bottom"
//                     />
//                 </Link>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <Link to="/platform-download/goto/windows">
//                     <img
//                         src={badgeWinEn}
//                         alt="logo of MT4 Windows"
//                         className="img-fluid w-100 text-left align-bottom"
//                     />
//                 </Link>
//             </>
//         )
//     }
// }

const news1 = (t: any) => {
    return (
        <>
            <h4 className="mb-30">
                <b>{t("platform.iphoneTitle")}</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-4 text-left align-bottom mb-20">
                    </div>
                    <div className="col-lg-8 text-center">
                        <>
                            {/* {t("platform.iphoneMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })} */}
                        </>
                    </div>

                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">{t("platform.iphoneQuoteTitle")}</h5>
                        <>
                            {/* {t("platform.iphoneQuoteMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })} */}
                        </>
                    </div>
                </div>
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">{t("platform.iphoneChartingTitle")}</h5>
                        <>
                            {/* {t("platform.iphoneChartingMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })} */}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

const news2 = (t: any) => {
    return (
        <>
            <h4 className="mb-30">
                <b>{t("platform.ipadTitle")}</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-4 text-left align-bottom mb-20">
                    </div>
                    <div className="col-lg-8 text-center">
                        <>
                            {t("platform.ipadMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })}
                        </>
                    </div>

                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">{t("platform.ipadQuoteTitle")}</h5>
                        <>
                            {t("platform.ipadQuoteMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

const news3 = (t: any) => {
    return (
        <>
            <h4 className="mb-30">
                <b>{t("platform.androidTitle")}</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="col-lg-6 text-center mb-30"></div>
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-4 text-left align-bottom mb-20">
                        
                    </div>
                    <div className="col-lg-3 text-left">
                        <a href="/media/installer/metatrader4.apk">
                            <p className="text-dark">{t("platform.apkDownload")}</p>
                        </a>
                    </div>
                    <div className="col-lg-3 text-center">

                    </div>
                    <div className="col-lg-8 text-center">
                        <>
                            {t("platform.androidMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })}
                        </>
                    </div>

                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">{t("platform.androidQuoteTitle")}</h5>
                        <>
                            {t("platform.androidQuoteMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

const news4 = (t: any) => {
    return (
        <>
            <h4 className="mb-30">
                <b>{t("platform.windowsTitle")}</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-4 text-left align-bottom mb-20">
                        <Link to="" className="align-bottom">
                            
                        </Link>
                    </div>
                    <div className="col-lg-8 text-center">
                        <>
                            {t("platform.windowsMessage")
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <div key={key}>
                                            <p className="text-dark text-left">{i}</p>
                                            <br />
                                        </div>
                                    )
                                })}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

function NewsContent(id: number, t: any) {
    if (id == 0) {
        return <>{news1(t)}</>
    }
    if (id == 1) {
        return <>{news2(t)}</>
    }
    if (id == 2) {
        return <>{news3(t)}</>
    }
    if (id == 3) {
        return <>{news4(t)}</>
    }
    if (id == 4) {
        return <>{news4(t)}</>
    }
}

function sideBar(id: number, t: any) {
    const fundsDict = [
        {id: 0, router: "news1", content: t("news1"), style: "border-bottom"},
        {id: 1, router: "news2", content: t("news2"), style: "border-bottom"},
        {id: 2, router: "news3", content: t("news3"), style: "border-bottom"},
        {id: 3, router: "news4", content: t("news4"), style: "border-bottom"},
    ]
    fundsDict[id].style = "active border-bottom"
    const listSidebar = fundsDict.map(fundsDictItem => (
        <li key={fundsDictItem.id} className={fundsDictItem.style}>
            <Link to={`/NewsBlog/${fundsDictItem.router}`} className="d-block font-primary text-dark p-4">
                {fundsDictItem.content}
            </Link>
        </li>
    ))
    return <>{listSidebar}</>
}

export default function NewsBlog({highlightString}: Props) {
    const {t, i18n} = useTranslation("")
    const currentLang = i18n.language
    return (
        <>
        <Helmet>
            <title>{t("seo.paltform.Title")}</title>
            <meta name="description" content={t("seo.paltform.Description")} />
            <meta name="keywords" content={t("seo.paltform.Keywords")} />
        </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("NEWS")}>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-4 order-lg-1 order-2">
                                <ul className="service-menu pl-0 border mb-50">{sideBar(highlightString, t)}</ul>
                            </aside>
                            <div className="col-lg-8 order-lg-2 order-1">
                                <p>{NewsContent(highlightString, t)}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
