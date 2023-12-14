import { useState } from "react"
import ModalBackground from "../ModalBackground";
import MobileMenuModal from "../MobileMenuModal";
//------------------------------
export default function Header() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div id="header">
            <div className="header-section">
                <div id="header-section-logo"></div>
                <nav id="header-section-navigation-bar">
                    <ul>
                        <li>
                            <span>Features</span>
                            <div className="list-item-dropdown-arrow"></div>
                            <div className="dropdown-options" id="features-dropdown">
                                <div className="features-dropdown-icon"></div>
                                <div className="features-dropdown-icon"></div>
                                <div className="features-dropdown-icon"></div>
                                <div className="features-dropdown-icon"></div>
                                <div className="features-dropdown-label">
                                    <span>Todo List</span>
                                </div>
                                <div className="features-dropdown-label">
                                    <span>Calendar</span>
                                </div>
                                <div className="features-dropdown-label">
                                    <span>Reminders</span>
                                </div>
                                <div className="features-dropdown-label">
                                    <span>Planning</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>Company</span>
                            <div className="list-item-dropdown-arrow"></div>
                            <div className="dropdown-options" id="company-dropdown">
                                <div className="company-dropdown-label">
                                    <span>History</span>
                                </div>
                                <div className="company-dropdown-label">
                                    <span>Our Team</span>
                                </div>
                                <div className="company-dropdown-label">
                                    <span>Blog</span>
                                </div>
                            </div>
                        </li>
                        <li><span>Careers</span></li>
                        <li><span>About</span></li>
                    </ul>
                </nav>
            </div>
            <div className="header-section">
                <div id="header-section-desktop-LoginRegister">
                    <span>Login</span>
                    <span>Register</span>
                </div>
                <div id="header-section-hamburguer-menu" onClick={toggleModal}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            {modal && (<ModalBackground clickModal={toggleModal} />)}
            {modal && (<MobileMenuModal clickModal={toggleModal} />)}
        </div>
    )
}