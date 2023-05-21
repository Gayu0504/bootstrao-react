import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';






function App() {
  return (
    <div className=" fluid-container m-3 ">
      <h1>Hello welcome to bootstrap react</h1>
      <BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/courses' element={<Cousers/>}></Route>
  <Route path='/events' element={<Event/>}></Route>
  <Route path='/pricing' element={<Pricing/>}></Route>
  <Route path='/trainers' element={<Trainers/>}></Route>

  

  
  

</Routes>
</BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
