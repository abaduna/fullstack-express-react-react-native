import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import UpLoad from "../pages/UpLoad";

const RouterPrincipal = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="uploadingSale" element={<UpLoad />} />
      </Routes>
    </Router>
  );
};
export default RouterPrincipal;
