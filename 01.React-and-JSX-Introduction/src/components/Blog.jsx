export default function Blog() {
    return (
        <section id="blog" className="padd-section wow fadeInUp">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Latest posts</h2>
                    <p className="separator">Integer cursus bibendum augue ac cursus .</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="block-blog text-left">
                            <a href="#">
                                <img src="img/blog/blog-image-1.jpg" alt="img" />
                            </a>
                            <div className="content-blog">
                                <h4>
                                    <a href="#">
                                        whats isthe difference between good and bat typography
                                    </a>
                                </h4>
                                <span>05, juin 2017</span>
                                <a className="pull-right readmore" href="#">
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-blog text-left">
                            <a href="#">
                                <img
                                    src="img/blog/blog-image-2.jpg"
                                    className="img-responsive"
                                    alt="img"
                                />
                            </a>
                            <div className="content-blog">
                                <h4>
                                    <a href="#">
                                        whats isthe difference between good and bat typography
                                    </a>
                                </h4>
                                <span>05, juin 2017</span>
                                <a className="pull-right readmore" href="#">
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="block-blog text-left">
                            <a href="#">
                                <img
                                    src="img/blog/blog-image-3.jpg"
                                    className="img-responsive"
                                    alt="img"
                                />
                            </a>
                            <div className="content-blog">
                                <h4>
                                    <a href="#">
                                        whats isthe difference between good and bat typography
                                    </a>
                                </h4>
                                <span>05, juin 2017</span>
                                <a className="pull-right readmore" href="#">
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}