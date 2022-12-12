import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {NotFound} from "./Pages/NotFound";
import {Category} from "./Pages/Category";
import {Recipe} from "./Pages/Recipe";

function App() {
    return (
        <>


            <Router >
                <Header/>
                <main className="container content">
                    < Routes>
                        <Route
                            path="/"
                            element={<Home/>}
                        />
                        <Route
                            path="/about"
                            element={<About/>}
                        />
                        <Route
                            path="/contacts"
                            element={<Contact/>}
                        />
                        <Route
                            path="/category/:name"
                            element={<Category/>}
                        />
                        <Route
                            path="/meal/:id"
                            element={<Recipe />}
                        />
                        <Route
                            path="*"
                            element={<NotFound/>}
                        />
                    </Routes>
                </main>
            </Router>

            <Footer/>
        </>
    );
}

export default App;
