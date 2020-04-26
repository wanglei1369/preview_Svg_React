/** @format */

import React, {Suspense} from "react"
import "../components/i18n"
import Layout from "../layouts/layout"
import Service from "../components/Service"
import Banner from "../components/Banner"
import Offices from "../components/Offices"
import Terminal from "../components/Terminal"
import Slider from "../components/Slider"
import FMA from "../components/FMA"
import PriceTable from "../components/PriceTable"
import VnNewsletter from "../components/VnNewsletter"

function IndexPageComponent() {
    return (
        <>
            <Layout>
                <Banner />
                <Service />
                <VnNewsletter/>
                <PriceTable />
                <FMA />
                <Slider />
                <Terminal />
                <Offices></Offices>
            </Layout>
        </>
    )
}

function IndexPage() {
    return (
        <Suspense fallback="loading">
            <IndexPageComponent />
        </Suspense>
    )
}

export default IndexPage
