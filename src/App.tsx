import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import Layout from "./components/Layout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/table" element={<TablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
