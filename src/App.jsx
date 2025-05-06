import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BeritaDetail from "./pages/BeritaDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
