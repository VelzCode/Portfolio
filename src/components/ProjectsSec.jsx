import "../assets/css/ProjectsSec.css";
import dp from "../assets/images/dpimage.png";
import parrotImg from "../assets/images/parrot-image.png";
import athena from "../assets/images/Athena1.png";
import { motion } from "framer-motion";

function ProjectsSec () {
    const textVariants = {
        show: {
            x: 0
        },

        hover: {
            x: 4
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 80
        },

        show: (delay) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            boxShadow: "0px 0px 0px rgba(53, 242, 165, 0)",
            transition: {
                duration: 1.5,
                delay: delay
            }
        }),
        
        hover: {
            y: -2,
            scale: 1.012,
            boxShadow: "0px 0px 40px rgba(56, 189, 248, 0.25)"
        }
    };
    
    const cardTwoVariants = {
        hidden: {
            opacity: 0,
            y: 80
        },

        show: (delay) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            boxShadow: "0px 0px 0px rgba(255, 170, 60, 0)",
            transition: {
                duration: 1.5,
                delay: delay
            }
        }),

        hover: {
            y: -2,
            scale: 1.012,
            boxShadow: "0px 0px 35px rgba(56, 189, 248, 0.5)",
            transition: {
                duration: 0.2
            }
        }
    };

    const imageVariants = {
        show: {
            scale: 1
        },
        hover: {
            scale: 1.01
        }
    };

    return (
        <section className="projects-wrapper">
            <motion.div
                className="project-one"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                custom={0.05}
                whileHover="hover"
            >
                <motion.div
                    className="img-wrapper"
                    variants={imageVariants}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18
                    }}
                >
                    <img src={dp} alt="DevPulse Logo" />
                </motion.div>
                <hr></hr>
                <ul className="list-p1">
                    <li><span className="li-name">Name:</span> <span className="li-name-value">DevPulse</span></li>
                    <li><span className="li-desc">Description:</span> <span className="li-desc-value">Responsive application built by a team of three developers, built around sharing, connecting, and interacting with clients and developers.</span></li>
                    <li><span className="li-stack">Tech Stack:</span> <span className="li-stack-value">HTML, CSS, React JSX, Node.js/Vite, API.</span></li>
                </ul>
                 <div className="p1-link-wrapper">
                    <motion.a
                        href="#" className="liveBtn-link buttons-p1"
                        whileHover={{ y: -1, scale: 1.015 }}
                        whileTap={{ y: 2, scale: 0.985 }}
                    >
                        Live Site
                    </motion.a>
                    <motion.a
                        href="https://github.com/acmainier/devpulse" className="buttons-p1"
                        whileHover={{ y: -1, scale: 1.015 }}
                        whileTap={{ y: 2, scale: 0.985 }}
                    >
                        Source Code
                    </motion.a>
                </div>
            </motion.div>
                <motion.div
                    className="project-two"
                    variants={cardTwoVariants}
                    initial="hidden"
                    animate="show"
                    custom={0.20}
                    whileHover="hover"
                >
                    <div className="parrot-wrapper">
                    <img src={parrotImg} alt="Parrot Logo" />
                    </div>
                    <hr className="p2-hr"></hr>
                    <h2 className="p2-header">Parrot App</h2>
                    <ul className="list-p2">
                        <li><span className="li-p2-title">Name:</span> <span className="li-p2-color">Project Parrot App</span></li>
                        <li><span className="li-p2-title">Description:</span> Created a application within a team of three developers to take a user's input and transform it into an output governed by the selected persona.</li>
                        <li><span className="li-p2-title">Name:</span>  HTML + CSS, Cloudflare Worker + OpenAI Integration, and JavaScript.</li>
                    </ul>
                    <div className="p2-link-wrapper">
                        <a href="https://vibecoder123.github.io/w5-app/" className="liveBtn-link button-p2">Live App</a>
                        <a href="https://github.com/Vibecoder123/w5-app" className="button-p2">Source Code</a>
                    </div>
                </motion.div>
            <motion.div
                className="project-three"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                custom={0.35}
                whileHover="hover"
            >
                <div className="img-wrapper-p3">
                    <img className="img-p3" src={athena} alt="Athena Logo" />
                </div>
                <hr className="p3-hr"></hr>
                <motion.h2
                    className="p3-h2"
                    variants={textVariants}
                >
                    Tech Blog Application
                </motion.h2>
                <ul className="p3-list-wrapper">
                    <li><span className="li-name">Name:</span> <span className="li-color">Tech Blog App</span></li>
                    <li><span className="li-name">Description:</span> Created a application with full support server side to handle any API/connect requests, and create a client side
                        product that worked alongside seemlessly without error.</li>
                    <li><span className="li-name">Tech Stack:</span>  <span className="li-color">HTML, CSS, MYSQL, Node.js</span></li>
                </ul>
                <div className="p3-link-wrapper">
                    <a href="https://week-8-sql.onrender.com/" className="liveBtn-link button-p3">Live Site</a>
                    <a href="https://github.com/VelzCode/Week.8-SQL" className="button-p3">Source Code</a>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsSec;