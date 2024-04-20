import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

function App() {
  return (
   <>
   
    <Header />

    <main className='main'> 

        <Home />
  
        <Products />

        <Contact />
       
    </main>

   </>
  );
}

export default App;
