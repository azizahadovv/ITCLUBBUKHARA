import { ADMIN, ERROEPAGE, HOME, REGISTER } from "./components/exporPage.js";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="fullBg">
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/developerPanel" element={<ADMIN />} />
        <Route path="/register" element={<REGISTER />} />
        <Route path="*" element={<ERROEPAGE />} />
      </Routes>
    </div>
  )
}