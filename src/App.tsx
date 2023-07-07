import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Calls } from "./Pages/Calls"
import { Contacts } from "./Pages/Contacts"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
