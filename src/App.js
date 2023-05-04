import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News category="general" />} exact></Route>
          <Route
            path="/business"
            element={<News category="business" />}
          ></Route>
          <Route
            path="/sports"
            element={<News category="sports" />}
            exact
          ></Route>
          <Route
            path="/politics"
            element={<News category="politics" />}
            exact
          ></Route>
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
