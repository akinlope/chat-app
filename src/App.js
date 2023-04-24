import Login from "./pages/Login";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div className=" bg-bgColor h-screen ">
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
