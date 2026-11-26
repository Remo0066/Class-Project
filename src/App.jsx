import { BrowserRouter, Route, Routes } from "react-router-dom"
import Projects from './pages/project'
import Login from './pages/login'
import Tasks from './pages/tasks'
import Clients from "./pages/clients"
function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
     ₹       <Route path="/tasks" element={<Tasks />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>            
  )
}

export default App;