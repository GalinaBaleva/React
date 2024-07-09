export default function Newsletter() {
    return (
        <div
            className="container-xxl bg-primary newsletter py-5 wow fadeInUp"
            data-wow-delay="0.1s"
        >
            <div className="container py-5 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <p className="section-title text-white justify-content-center">
                            <span />
                            Newsletter
                            <span />
                        </p>
                        <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                        <p className="text-white mb-4">
                            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                            labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita
                            duo justo
                        </p>
                        <div className="position-relative w-100 mt-3">
                            <input
                                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                                type="text"
                                placeholder="Enter Your Email"
                                style={{ height: 48 }}
                            />
                            <button
                                type="button"
                                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                            >
                                <i className="fa fa-paper-plane text-primary fs-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}