import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/Signin";
import SigninPagem from "./pages/Signinm";
import GetStartedPage from "./pages/GetStarted";
import GetStartedPagem from "./pages/GetStartedm";
import StartupPage from "./pages/Startup";
import CsePage from "./pages/Cse";
import EventsPage from "./pages/Events";
import EcePage from "./pages/Ece";
import Userpage from "./pages/UserPage";
import Departmentspage from "./pages/Departments";
import CreatePage from "./pages/CreatePage";
import SinglepostPage from "./pages/SinglepostPage";
import Adminpage from "./pages/AdminPage";
import MechPage from "./pages/Mech";
import ChemPage from "./pages/Chem";
import MmePage from "./pages/Mme";
import CivilPage from "./pages/Civil";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/signinm" element={<SigninPagem/>} exact />
        <Route path="/getstarted" element={<GetStartedPage />} exact />
        <Route path="/getstartedm" element={<GetStartedPagem />} exact />
        <Route path="/startups" element={<StartupPage />} exact />
        <Route path="/cse" element={<CsePage />} exact />
        <Route path="/ece" element={<EcePage />} exact />
        <Route path="/mech" element={<MechPage />} exact />
        <Route path="/chem" element={<ChemPage />} exact />
        <Route path="/mme" element={<MmePage />} exact />
        <Route path="/civil" element={<CivilPage />} exact />
        <Route path="/events" element={<EventsPage />} exact />
        <Route
          path="/projectsandresearch"
          element={<Departmentspage />}
          exact
        />
        <Route path="/userdashboard" element={<Userpage />} exact />
        <Route path="/createnewpost" element={<CreatePage />} exact />
        <Route path="/post/:id" element={<SinglepostPage />} exact />
        <Route path="/adminpage" element={<Adminpage />} exact />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
