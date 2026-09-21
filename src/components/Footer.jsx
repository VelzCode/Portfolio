import "../assets/css/Footer.css";

function Footer () {


    return (
        <section className="footer">
            <h3 className="link-header">Useful Links</h3>
            <div className="social-links">
                <a href="#" className="socBtn socBtn-2">GitHub</a>
                <a href="#" className="socBtn socBtn-2">LinkedIn</a>
                <a href="#" className="socBtn socBtn-2">Email</a>
            </div>
            <p>&copy;<span className="footer-text"> Jason Dewhurst. My Portfolio 2026</span></p>
        </section>
    )
}

export default Footer;