import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar.jsx";
import { Home } from "./pages/index.js";

const App = () => {
    return (
        <main className={"bg-slate-300/20"}>
            <Router>
                {/*<Navbar/>*/}
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App