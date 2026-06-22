import { Route, Routes } from 'react-router-dom'
import Chatbot from './pages/Chatbot'
import FindLawyer from './pages/FindLawyer'
import Home from './pages/Home'
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-lawyer" element={<FindLawyer />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
