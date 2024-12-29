
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Contact from './Pages/Contact';
import CoursesPage from './Pages/Courses';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import About from './Pages/About';
import CourseDetails from './Components/CourseDetails';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
