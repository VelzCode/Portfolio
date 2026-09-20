import "./assets/css/App.css";
import Navbar from "./components/Navbar.jsx";
import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ProjectsSec from "./components/ProjectsSec.jsx";
import SkillsBar from "./components/SkillsBar.jsx";
import Form from "./components/Contact.jsx";

function App() {

    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <About />
            </Layout>
            <ProjectsSec />
            <SkillsBar />
            <Form />
        </>
    );
}

export default App;