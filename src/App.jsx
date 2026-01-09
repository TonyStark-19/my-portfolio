// import routers
import { Routes, Route } from "react-router-dom";

// import main page
import MainPage from "./Pages/MainPage.jsx";

// main page
export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  )
}