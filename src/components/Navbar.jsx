import "../assets/css/Navbar.css";
import logo from "../assets/images/jd_border_glow.svg";
import li from "../assets/images/linkedin_padded.png";

function Navbar () {

    return (
        <>
            <section className="nav-wrapper">
                <div className="nav-l">
                    <img src={logo} alt="Logo Picture" />
                    <span>Jay / Developer</span>
                </div>
                <div className="nav-bar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Skills</a>
                    <a href="#">Contact</a>
                </div>
                <div className="nav-social">
                    <div className="links-box">
                    <a href="#" className="link-item">
                        <img src={li} alt="LinkedIn Icon" />
                        <span>Get in Touch</span>
                    </a>
                    </div>
                </div>
            </section>
            <hr className="nav-hr"></hr>
        </>
    )
}

export default Navbar;