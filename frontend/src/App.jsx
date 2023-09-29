import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PopularMovies from './Components/PopularMovies';
import TopRated from './Components/TopRated';
import UpcomingMovies from './Components/UpcomingMovies';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/popular' element={<PopularMovies />} />
        <Route exact path='/toprated' element={<TopRated />} />
        <Route exact path='/upcoming' element={<UpcomingMovies />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;