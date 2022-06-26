import "./styles/index.scss"
import "./styles/_topbar.scss"
import Topbar from './components/Topbar';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Hero /> 
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
