/** @format */

import React, {ReactNode} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <SEO />
            <Header></Header>
            <div>
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout
