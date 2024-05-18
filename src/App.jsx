import {  Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Platforms from "./pages/Platforms/Platforms";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import MoviesSearch from "./pages/Movies_Search/MoviesSearch";
import Trailers from "./pages/Trailers/Trailers";



const App = () => {
  
  return (
   <>
   <Routes>
    <Route path="/" element={<StartPage/>}/>
    <Route path="/platforms" element= {<Platforms/>} />   
    <Route path="/movies/:platformName" element={<Movies/>}/>
    <Route path="/movies_Search" element={<MoviesSearch/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/trailers" element={<Trailers/>}/>
    <Route path="*" element={<StartPage/>}/>
   </Routes>
   </>
  );
};

export default App;