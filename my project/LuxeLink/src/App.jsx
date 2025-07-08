import Nav from './components/nav/Nav'
import './App.css'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Homepage from './pages/home/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/Authcontext'


function App() {
  return (
    
    <Router>
      <AuthProvider>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signin" element={ <Signin/>} />
      <Route path="/signup" element={  <Signup/>} />
    </Routes>
    </AuthProvider>
    </Router>
   
  )
}

export default App;
