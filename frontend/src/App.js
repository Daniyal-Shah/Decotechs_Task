import Routing from "./routes/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setupAxios from "./setupAxios";
import axios from "axios";

function App() {
  //Setting axios
  setupAxios(axios);
  return (
    <div>
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
