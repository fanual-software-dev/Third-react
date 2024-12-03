import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";

import Enterprise from "./components/Enterprise";
import Support from "./components/Support";


function App() {
  return (
    <div className=" div">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="features" element={<Featured/>}></Route>
        <Route path="enterprise" element={<Enterprise/>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
