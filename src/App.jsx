import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Bar from './Components/Bar';
import './App.css'
import ConsultationPage from './Pages/ConsultationPage';
import ProductDetailspage from './Pages/ProductDetailspage';
import Cartpage from './Pages/Cartpage';
function App() {
    return (
        <Router>
            <Bar />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/product-detail" element={<ProductDetailspage />} />
                <Route path="/cart" element={<Cartpage />} />


            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
