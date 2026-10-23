import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("isDark");
    return theme !== null ? JSON.parse(theme) : false;
  });
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
