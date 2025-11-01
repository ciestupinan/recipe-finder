import "./App.css";
import Navbar from "./components/shared/Navbar";
import Homepage from "./components/Homepage";
import CallToAction from "./components/shared/CallToAction";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
