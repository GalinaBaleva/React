export default function Header() {
    return (
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0">Trufflemush</h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <a href="service.html" className="nav-item nav-link">
                            Service
                        </a>
                        <a href="project.html" className="nav-item nav-link">
                            Project
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu m-0">
                                <a href="team.html" className="dropdown-item">
                                    Our Team
                                </a>
                                <a href="testimonial.html" className="dropdown-item">
                                    Testimonial
                                </a>
                                <a href="404.html" className="dropdown-item">
                                    404 Page
                                </a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <a
                        href=""
                        className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                    >
                        Get Started
                    </a>
                </div>
            </nav>
            <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">
                                A Digital Agency Of Inteligents &amp; Creative People
                            </h1>
                            <p className="text-white pb-3 animated slideInDown">
                                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
                                dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
                                sit justo amet ipsum vero ipsum clita lorem
                            </p>
                            <a
                                href=""
                                className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                            >
                                Read More
                            </a>
                            <a
                                href=""
                                className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                            >
                                Contact Us
                            </a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img
                                className="img-fluid animated zoomIn"
                                src="img/hero.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}