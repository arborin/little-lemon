import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
