import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Enterprise from "./components/Enterprise";
import Support from "./components/Support";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="features" element={<Featured/>}></Route>
        <Route path="enterprise" element={<Enterprise/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
