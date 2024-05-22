import {  Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Platforms from "./pages/Platforms/Platforms";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import MoviesSearch from "./pages/Movies_Search/MoviesSearch";
import Trailers from "./pages/Trailers/Trailers";
import User from "./pages/User/User";



const App = () => {
  
  return (
   <>
   <Routes>
    <Route path="/platforms" element= {<Platforms/>} />   
    <Route path="/movies/:platformName" element={<Movies/>}/>
    <Route path="/movies_Search/:platformName" element={<MoviesSearch/>}/>
    <Route path="/movie/:id" element={<Movie/>}/>
    <Route path="/trailer/:id" element={<Trailers/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/" element={<StartPage/>}/>
    <Route path="*" element={<StartPage/>}/>
   </Routes>
   </>
  );
};

export default App;