import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/footer";
import Footer2 from "./components/Footer02/Footer2"


function App() {
  return (
   <>
    <Router>
    <Header />

    <Routes>

    <Route path="/" element={<HomePage />} />
    <Route path="/contact-us" element={<ContactUs />} />

    </Routes>


    </Router>
   </>
  );
};

const HomePage = () => {
  return (
    <>
    <Home />
    <Products />
    <Gallery />
    <Footer />
    <Footer2 />


    {/* <Routes>
      <Route path="/products" element={<Products />} />
    </Routes> */}
  

  
    </>
  );
};


const ContactUs = () => {
  return (
    <>
    <Header />
    <Contact />

    <Footer />
    <Footer2 />

    </>
  )
}

export default App;
