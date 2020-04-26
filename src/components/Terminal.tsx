/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import "../components/i18n"
import "../styles/terminal.css"

export default function Terminal() {
    const {t} = useTranslation("")
    const terminalStyle = {
        background: "#0D0746",
    }
    return (
        <>
            <section className="section" style={terminalStyle}>
                <div className="container">
                    <div className="terminal-container">
                        <div className="terminal-flex-item">
                            <p className="text-white">
                                {t("services.tradingPlatformMessage1")}
                                <br />
                                <span>
                                    {t("services.tradingPlatformMessage2")}
                                    {t("services.tradingPlatformMessage3")}
                                    {t("services.tradingPlatformMessage4")}
                                    {t("services.tradingPlatformMessage5")}
                                </span>
                                <br />
                                {t("services.tradingPlatformMessage6")}
                            </p>
                        </div>
                        <div className="terminal-flex-item">
                            <Link to="/platform/windows" className="btn-outline">
                                {t("footer.platform")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
