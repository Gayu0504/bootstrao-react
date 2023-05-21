import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link to="index.html">Mentor</Link></h1>

                    <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Courses">Courses</Link></li>
                            <li><Link to="/Trainers">Trainers</Link></li>
                            <li><Link to="/Events">Events</Link></li>
                            <li><Link to="/Pricing">Pricing</Link></li>

                            <li className="dropdown"><Link to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/">Drop Down 1</Link></li>
                                    <li className="dropdown"><Link to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/">Deep Drop Down 1</Link></li>
                                            <li><Link to="/">Deep Drop Down 2</Link></li>
                                            <li><Link to="/">Deep Drop Down 3</Link></li>
                                            <li><Link to="/">Deep Drop Down 4</Link></li>
                                            <li><Link to="/">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">Drop Down 2</Link></li>
                                    <li><Link to="/">Drop Down 3</Link></li>
                                    <li><Link to="/">Drop Down 4</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <Link to="/Courses" className="get-started-btn">Get Started</Link>

                </div>
            </header>
        </div>
    )
}
