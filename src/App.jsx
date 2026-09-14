import "./assets/css/App.css";
import Navbar from "./components/Navbar.jsx";
import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {

    return (
        <>
            <Navbar />
            <Layout>
                <Hero />
                <About />
            </Layout>
            
        </>
    );
}

export default App;