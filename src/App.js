import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArticlePage from "./Pages/ArticlePage";
import AboutPage from "./Pages/AboutPage";
import ArticlesListPage from "./Pages/ArticlesListPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>My Awesome Blog</h1>
                <div id="page_body">
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/articles" element={ <ArticlesListPage/>} />
                        <Route path="/articles/:articleId" element={<ArticlePage/>} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
