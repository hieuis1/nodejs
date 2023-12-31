import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./module/home/Home";
import Login from "./module/login/Login";
import SignUp from "./module/signUp/SignUp";
import Create from "./module/create/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./module/profile/Profile";
import IsLogin from "./components/isLogin/IsLogin";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
