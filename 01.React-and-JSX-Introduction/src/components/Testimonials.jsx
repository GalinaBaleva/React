export default function Testimonials() {
    return (
        <section id="testimonials" className="padd-section text-center wow fadeInUp">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="testimonials-content">
                            <div
                                id="carousel-example-generic"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item  active">
                                        <div className="top-top">
                                            <h2>Our Users Speack volumes us</h2>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five
                                                centuries.
                                            </p>
                                            <h4>
                                                Kimberly Tran<span>manager</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="top-top">
                                            <h2>Our Users Speack volumes us</h2>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five
                                                centuries.
                                            </p>
                                            <h4>
                                                Henderson<span>manager</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="top-top">
                                            <h2>Our Users Speack volumes us</h2>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five
                                                centuries.
                                            </p>
                                            <h4>
                                                David Spark<span>manager</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="btm-btm">
                                    <ul className="list-unstyled carousel-indicators">
                                        <li
                                            data-target="#carousel-example-generic"
                                            data-slide-to={0}
                                            className="active"
                                        />
                                        <li
                                            data-target="#carousel-example-generic"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carousel-example-generic"
                                            data-slide-to={2}
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}