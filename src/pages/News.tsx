/** @format */

import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/layout"
//import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import imagePreloader from "../images/preloader.gif"
import imageBackground from "../images/news/background.jpg"
import newsObject from "../data/newsData.json"

export default function News() {
    const sectionStyle = {
        backgroundImage: `url(${imageBackground})`,
    }
    const newsCard = newsObject.map(newsObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={newsObjectItem.props}>
            <div className="card">
                <div className="card-img-wrapper overlay-rounded-top">
                    <img
                        src={require(`../images/news/${newsObjectItem.props}.jpg`)}
                        alt={newsObjectItem.title}
                        className="card-img-top"
                        height="200px"
                    />
                </div>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <div className="py-3 px-4 border-right text-center">
                            <h3 className="text-primary mb-0" style={{width: "34"}}>
                                {newsObjectItem.date.substr(0, 2).trim()}
                            </h3>
                            <p className="mb-0">{newsObjectItem.date.split(" ").pop()}</p>
                        </div>
                        <div className="p-3" style={{minHeight: "12vh"}}>
                            <Link to={`/news/${newsObjectItem.props}`} className="h4 font-primary text-dark">
                                {newsObjectItem.title}
                            </Link>
                            {/* <p>by {newsObjectItem.author}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            {/* <Helmet>
                <title>News | Carrick Asset</title>
                <meta name="description" content="Carrick Asset News" />
            </Helmet> */}
            <Layout>
                <section className="page-title overlay" style={sectionStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white font-weight-bold">News</h2>
                                <ol className="breadcrumb">
                                    <li>{/* <Link to="/">主页</Link> */}</li>
                                    <li>{/* <Link to="/news">业内新闻概览</Link> */}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">{newsCard}</div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
