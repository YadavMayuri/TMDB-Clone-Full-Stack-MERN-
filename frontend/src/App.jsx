import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PopularMovies from './Components/PopularMovies';
import TopRated from './Components/TopRated';
import UpcomingMovies from './Components/UpcomingMovies';
import UserRegister from './Components/UserRegister';
import Login from './Components/Login';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/AuthContext';
import SinglePageDetails from './Components/SinglePageDetails';


function App() {
  const { state } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/popular' element={<PopularMovies />} />
        <Route exact path='/toprated' element={<TopRated />} />
        <Route exact path='/upcoming' element={<UpcomingMovies />} />
        <Route exact path='/singlepagedetails/:id' element={<SinglePageDetails />} />
        <Route exact path='/register' element={<UserRegister />} />
        <Route exact path='/login' element={<Login />} />






      </Routes>
      <Footer />
    </div>
  );
}

export default App;