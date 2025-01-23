 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Projects from './pages/Projects';
import Daschboard from './pages/Daschboard';

export default function App() {
  return (
    // <div>
    //   <h1 className="text-3xl text-red-500">hello</h1>
    // </div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
           <Route path='/dashboard' element={<Daschboard />} />
           <Route path='/projects' element={<Projects/>} />
      </Routes>
     </BrowserRouter>
  );
}
