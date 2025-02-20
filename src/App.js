import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Login from './pages/Login';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
