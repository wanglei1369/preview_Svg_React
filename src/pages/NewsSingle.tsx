/** @format */

import React from "react"
import {Link, RouteComponentProps, Redirect} from "react-router-dom"
import Layout from "../components/layout"
//import {LazyImage} from "react-lazy-images"
import {Helmet} from "react-helmet"
import imagePreloader from "../images/preloader.gif"
import imageBackground from "../images/news/background.jpg"
import newsData from "../data/newsData.json"
import "../components/i18n"

type TParams = {props: string}
function Page(props: string) {
    
    let validProps = true
    const newsRender = {title: "", content: "", author: "", date: "", imageUri: ""}
    for (let index = 0; index < newsData.length; index++) {
        if (props === newsData[index]["props"]) {
            validProps = false
            newsRender["title"] = newsData[index]["title"]
            newsRender["content"] = newsData[index]["content"]
            newsRender["date"] = newsData[index]["date"]
            newsRender["author"] = newsData[index]["author"]
            newsRender["imageUri"] = newsData[index]["props"]
        }
    }
    const sectionStyle = {
        backgroundImage: `url(${imageBackground})`,
    }
    if (!validProps) {
        
        return (
            <>
                {/* <Helmet>
                    <title>{newsRender.title} | News | Carrick Asset</title>
                    <meta name="description" content="Carrick Asset News" />
                </Helmet> */}
                <Layout>
                    <section className="page-title overlay" style={sectionStyle}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="text-white font-weight-bold">{newsRender.title}</h2>
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/news">News</Link>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 py-100">
                                    <div className="border rounded bg-white">
                                        <img
                                            src={require(`../images/news/${newsRender.imageUri}.jpg`)}
                                            alt={newsRender.title}
                                            className="img-fluid w-100 rounded-top"
                                        />

                                        <div className="p-4">
                                            <h3>{newsRender.title}</h3>
                                            <ul className="list-inline d-block pb-4 border-bottom mb-3">
                                                <li className="list-inline-item text-color">
                                                    Posted By {newsRender.author}
                                                </li>
                                                <li className="list-inline-item text-color">On {newsRender.date}</li>
                                            </ul>
                                            <div>
                                                {newsRender.content.split("\n").map((i, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <p>{i}</p>
                                                            <br />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {/* Sidebar */}
                                    <div className="bg-white px-4 py-100 sidebar-box">
                                        {/* Widget Newsletter */}
                                        <div className="newsletter">
                                            <h4 className="mb-3">Stay Updated</h4>
                                            <form name="newscontact" 
                                                action="https://formspree.io/magicfx@cjcmarkets-svg.com"
                                                method="post">
                                                <input type="hidden" name="form-name" value="newscontact" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                />
                                                <button type="submit" className="btn btn-primary btn-sm">
                                                    Subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </>
        )
    } else {
        return <Redirect to="/404" />
    }
}

export default function NewsSingle(props: RouteComponentProps<TParams>) {
    const pathProps = props.match.params.props
    return <>{Page(pathProps)}</>
}
