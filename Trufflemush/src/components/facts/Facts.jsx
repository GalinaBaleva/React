export default function Facts() {
    return (
        <div
            className="container-xxl bg-primary fact py-5 wow fadeInUp"
            data-wow-delay="0.1s"
        >
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <i className="fa fa-certificate fa-3x text-secondary mb-3" />
                        <h1 className="text-white mb-2" data-toggle="counter-up">
                            1234
                        </h1>
                        <p className="text-white mb-0">Years Experience</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.3s"
                    >
                        <i className="fa fa-users-cog fa-3x text-secondary mb-3" />
                        <h1 className="text-white mb-2" data-toggle="counter-up">
                            1234
                        </h1>
                        <p className="text-white mb-0">Team Members</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.5s"
                    >
                        <i className="fa fa-users fa-3x text-secondary mb-3" />
                        <h1 className="text-white mb-2" data-toggle="counter-up">
                            1234
                        </h1>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.7s"
                    >
                        <i className="fa fa-check fa-3x text-secondary mb-3" />
                        <h1 className="text-white mb-2" data-toggle="counter-up">
                            1234
                        </h1>
                        <p className="text-white mb-0">Compleate Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}