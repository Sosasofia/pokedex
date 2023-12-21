import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

export type FixMeLater = any;

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Home />
      </div>
    </div>
  );
};

export default App;
