import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Offers from "./components/Offers";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Quotes />
      <Offers />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
