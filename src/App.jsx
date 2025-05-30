import About from "./components/About";
import Benefit from "./components/Benefit";
import Cta from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Favorite from "./components/favorite";
import SearchUmbul from "./components/maps";
function App() {
    return (
        <main>
            <Navbar />
            <Header />
            <Cta />
            <About />
            <Favorite />
            <Benefit />
            <SearchUmbul />
            <Footer />
        </main>
    );
}

export default App;
