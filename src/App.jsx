import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Score from './Pages/Score';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Bar from './Components/Bar';

function App() {
    return (
        <Router>
            <Bar/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/score" element={<Score />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
