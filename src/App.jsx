import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Bar from './Components/Bar';
import './App.css'
import ConsultationPage from './Pages/ConsultationPage';
import ProductDetailspage from './Pages/ProductDetailspage';
function App() {
    return (
        <Router>
            <Bar/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/product-detail" element={<ProductDetailspage />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
