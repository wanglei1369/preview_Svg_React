/** @format */

import React from "react"
import "react-responsive-modal/styles.css"
import {Modal} from "react-responsive-modal"
import {useTranslation} from "react-i18next"
import "../components/i18n"
import "../styles/terminal.css"
import "../styles/styles.css"

export default class App extends React.Component {
    state = {
        open: true,
    }
    onOpenModal = () => {
        this.setState({open: true})
    }
    onCloseModal = () => {
        this.setState({open: false})
    }
    render() {
        const {open} = this.state
        const contactFormStyle = {
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        return (
            <>
               
                <Modal open={open} onClose={this.onCloseModal} center={true}>
                    <div className="vn-newsletter">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-5 box-shadow contact-form" style={contactFormStyle}>
                                    <form
                                        method="POST"
                                        action="https://formspree.io/magicfx@cjcmarkets-svg.com"
                                        className="row">
                                        {/* <div className="col-lg-12">
                                            <h5 className="text-dark mb-40">{}</h5>
                                        </div> */}
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder= "Họ và Tên"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                className="form-control"
                                                placeholder="Số điện thoại"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn-outline text-center" type="submit" value="send">
                                                {("Đăng ký bản tin")}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}