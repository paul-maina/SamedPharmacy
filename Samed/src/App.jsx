
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import MedicineList from "./Components/MedicineList";
import Layout from "./Components/Layout";
import Blogs from "./Pages/Blogs";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";
import About from "./Pages/About"
import NoPage from "./Pages/NoPage";



function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="medicinelist" element={<MedicineList />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}



export default App;
