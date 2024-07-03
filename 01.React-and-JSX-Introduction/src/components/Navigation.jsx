export default function Navigation() {
    return (
        <header id="header" className="header header-hide">
            <div className="container">
                <div id="logo" className="pull-left">
                    <h1>
                        <a href="#body" className="scrollto">
                            <span>e</span>Startup
                        </a>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active">
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about-us">About</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#screenshots">Screenshots</a>
                        </li>
                        <li>
                            <a href="#team">Team</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className="menu-has-children">
                            <a href="">Drop Down</a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 4</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 5</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                {/* #nav-menu-container */}
            </div>
        </header>
    );
}