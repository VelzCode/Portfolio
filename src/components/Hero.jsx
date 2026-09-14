import "../assets/css/Hero.css";

function Hero () {

    return (
        <section className="col-a">
            <h2 className="h2-title">WHAT I CAN DO FOR <span className="h2-focus">YOU</span></h2>
            <h1 className="h1-title">Modern Websites.<br></br>Meaningful <span className="h1-focus">Opportunities.</span></h1>
            <div className="content-paragraph">
                <p className="content-p-header">My name is Jason <span className="content-p-focus">(Jay for short)</span>, a Front-End Developer focused on building modern websites that look professional tailored to the customers needs, that perform well and make a strong first impression.</p>
                <p className="content-p-header-em"><em>I build responsive, efficient and maintainable websites designed to look professional, work smoothly and deliver a great user experience. Combining technical skill, creative thinking and clear communication, I create solutions that help businesses strengthen their online presence and development teams turn ideas into polished, reliable products.</em></p>
            </div>
        </section>
    )
}

export default Hero;