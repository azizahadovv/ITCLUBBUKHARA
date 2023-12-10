import { ERROEPAGE, HOME } from "./components/exporPage.js";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="*" element={<ERROEPAGE />} />
      </Routes>
    </div>
  )
}