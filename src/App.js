import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Controllers/Landing/index";
import Intro from "./Controllers/Introduction/";
import Valence from "./Controllers/Valence";
import Score from "./Controllers/score";
import NoMatch from "./Controllers/404";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <>
            <Landing></Landing>
          </>
        ) : (
          <>
            <div className="justify-right margin-medium">
              <button
                className="connect bold"
                style={{ position: "relative" }}
                onClick={logout}
              >
                DISCONNECT
              </button>
            </div>
            <Router>
              <Routes>
                <Route exact path="/" element={<Intro></Intro>}></Route>
                <Route path="/valence" element={<Valence></Valence>}></Route>
                <Route path="/score" element={<Score></Score>}></Route>
                <Route path="*" element={<NoMatch></NoMatch>}></Route>
              </Routes>
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
