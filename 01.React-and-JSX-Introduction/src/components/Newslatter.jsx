export default function Newslatter() {
    return (
        <section id="newsletter" className="newsletter text-center wow fadeInUp">
            <div className="overlay padd-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-6">
                            <form className="form-inline" method="POST" action="#">
                                <input
                                    type="email"
                                    className="form-control "
                                    placeholder="Email Adress"
                                    name="email"
                                />
                                <button type="submit" className="btn btn-default">
                                    <i className="fa fa-location-arrow" />
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-google-plus" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}