import { useState } from "react";
import "./assets/css/App.css";

function App() {
    const [count, setCount] = useState(0)

    return (
        <section className="nav-wrapper">
            <div className="nav-bar">
                <a href="#">Home</a>
            </div>
        </section>
  )
}

export default App;
