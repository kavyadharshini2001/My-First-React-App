import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";
import Navbar from "./Components/Navbar";
import Pricelist from "./Components/Pricelist";
import Form from "./Components/Form";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.css";
import Studentlist from "./Components/Studentlist";
import StudentDetails from "./Components/StudentDetails";
import { UserProvider } from "./Context/UseContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider value={"Fita"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/price" element={<Pricelist />} />
            <Route path="/form" element={<Form />} />
            <Route path="/studentlist" element={<Studentlist />} />
            <Route path="/student/detail/:id" element={<StudentDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Toaster
            toastOptions={{
              style: {
                background: "white",
                color: "green",
              },
            }}
          />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
