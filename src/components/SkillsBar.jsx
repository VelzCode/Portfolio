import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiVite, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import "../assets/css/SkillsBar.css";

function SkillsBar () {
    const skills = [
        { name: "HTML", icon: FaHtml5, color: "#e34f26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "Git", icon: FaGitAlt, color: "#f05032" },
        { name: "Github", icon: FaGithub, color: "#f2f2e8"},
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Vite", icon: SiVite },
        { name: "MySQL", icon: SiMysql, color: "#5fa8d3", size: "1.9rem" },
        { name: "React", icon: FaReact, color: "#61dafb" },
        { name: "WordPress", icon: FaWordpress, color: "#21759b" }
    ];

    return (
        <>
            <h2 className="skills-header">Skills & Technologies</h2>
            <section className="skills-section">
                <motion.div
                    className="skills-track"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    <div className="skills-group">
                        {skills.map(({ name, icon: Icon, color, size }) => (
                        <span className="skill-item" key={name}>
                            <Icon 
                                color={color}
                                size={size || "1.3rem"} 
                            />
                            {name}
                        </span>
                    ))}
                    </div>

                    <div className="skills-group">
                        {skills.map(({ name, icon: Icon, color, size }) => (
                            <span className="skill-item" key={`duplicate-${name}`}>
                                <Icon 
                                    color={color}
                                    size={size || "1.3rem"} 
                                />
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default SkillsBar;