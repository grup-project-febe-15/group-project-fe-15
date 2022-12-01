import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouters from "./router";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRouters />
      <Footer />
    </>
  );
}

export default App;
