
import aboutimage from '../assets/img/about.jpg';
import React from 'react'

export default function Home() {
    return (
        <div>
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative" >
                    <h1>Learning Today,<br />Leading Tomorrow</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="courses.html" className="btn-get-started">Get Started</a>
                </div>
            </section>


            <main id="main">

                <section id="about" className="about">
                    <div className="container" >

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" >
                                <img src={aboutimage} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    )
}
