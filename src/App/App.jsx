import { Route, Routes } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import {
  BarsCard,
  Catigories,
  Cobinet,
  Favorites,
  Filter_inside,
  Footer,
  Home,
  Login,
  Navbar,
  Navbar_Top,
  PageNoteFount,
  Search,
  Purchase,
  Filtr,
  SignUp,
} from "..";
import "./App.scss";
import { useState } from "react";
import Main_menu from "../Components/Asosiy_components/Main_menu/Main_menu";
import Modal_media from "../Components/Home_components/Categorioes/Modal_media/Modal_media";
const App = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 155) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div className="container">
      <Navbar_Top />
      <Navbar />
      <Catigories />
      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className={scroll ? "top active" : "top"}
      >
        <IoIosArrowRoundUp />
      </div>
      <Modal_media />
      <Main_menu />
      <BarsCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:id/:id2" element={<Filtr />} />
        <Route path="/Filter_inside" element={<Filter_inside />} />
        <Route path="/Fovorite" element={<Favorites />} />
        <Route path="/Search/:id" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cobinet" element={<Cobinet />} />
        <Route path="/Cart" element={<Purchase />} />
        <Route path="*" element={<PageNoteFount />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
