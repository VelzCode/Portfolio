import "../assets/css/ProjectsSec.css";
import dp from "../assets/images/dpimage.png";
import parrotImg from "../assets/images/Parrot-trans.png";
import athena from "../assets/images/Athena1.png";

function ProjectsSec () {

    return (
        <section className="projects-wrapper">
            <div className="project-one">
                <div className="img-wrapper">
                    <img src={dp} alt="DevPulse Logo" />
                </div>
                <hr></hr>
                <ul className="list-p1">
                    <li><span className="li-name">Name:</span> <span className="li-name-value">DevPulse</span></li>
                    <li><span className="li-desc">Description:</span> <span className="li-desc-value">Responsive application built by a team of three developers, built around sharing, connecting, and interacting with clients and developers.</span></li>
                    <li><span className="li-stack">Tech Stack:</span> <span className="li-stack-value">HTML, CSS, React JSX, Node.js/Vite, API.</span></li>
                </ul>
                 <div className="p1-link-wrapper">
                    <a href="#" className="button-p2">Live Site</a>
                    <a href="https://github.com/acmainier/devpulse" className="button-p1">Source Code</a>
                </div>
            </div>
            <div className="project-two">
                <div className="parrot-wrapper">
                    <img className="img-p2" src={parrotImg} alt="Parrot Project Mascot" />
                </div>
                <div className="project-info">
                    <h2 className="p2-header">Parrot App</h2>
                    <ul className="list-p2">
                        <li><span className="li-p2-title">Name:</span> <span className="li-p2-color">Project Parrot App</span></li>
                        <li><span className="li-p2-title">Description:</span> Created a application within a team of three developers to take a user's input and transform it into an output governed by the selected persona.</li>
                        <li><span className="li-p2-title">Name:</span>  HTML + CSS, Cloudflare Worker + OpenAI Integration, and JavaScript.</li>
                    </ul>
                    <div className="p2-link-wrapper">
                        <a href="https://vibecoder123.github.io/w5-app/" className="button-p2">Live App</a>
                        <a href="https://github.com/Vibecoder123/w5-app" className="button-p2">Source Code</a>
                    </div>
                </div>
            </div>
            <div className="project-three">
                <div className="img-wrapper-p3">
                    <img className="img-p3" src={athena} alt="Athena Logo" />
                </div>
                <hr className="p3-hr"></hr>
                <h2 className="p3-h2">Tech Blog Application</h2>
                <ul className="p3-list-wrapper">
                    <li><span className="li-name">Name:</span> <span className="li-color">Tech Blog App</span></li>
                    <li><span className="li-name">Description:</span> Created a application with full support server side to handle any API/connect requests, and create a client side
                        product that worked alongside seemlessly without error.</li>
                    <li><span className="li-name">Tech Stack:</span>  <span className="li-color">HTML, CSS, MYSQL, Node.js</span></li>
                </ul>
                <div className="p3-link-wrapper">
                    <a href="https://week-8-sql.onrender.com/" className="button-p3">Live Site</a>
                    <a href="https://github.com/VelzCode/Week.8-SQL" className="button-p3">Source Code</a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSec;