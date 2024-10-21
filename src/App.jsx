import {  Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Platforms from "./pages/Platforms/Platforms";
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import MoviesSearch from "./pages/Movies_Search/MoviesSearch";
import Trailers from "./pages/Trailers/Trailers";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import MoviesAdmin from "./pages/Movies_Admin/MoviesAdmin";
import FormPost from "./pages/FormPost/FormPost";
import FormPut from "./pages/FormPut/FormPut";
import PlatformsProvider from "./providers/PlatformsProvider";
import TrailerProvider from "./providers/TrailerProvider";
import UserProvider from "./providers/UserProvider";

const App = () => {
  
  return (
   <>
   <Routes>
    <Route path="/platforms" element= {<Platforms/>} />   
    <Route path="/movies/:platformName" element={<Movies/>}/>
    <Route path="/movies_Search/:platformName" element={<MoviesSearch/>}/>
    <Route path="/moviesAdmin/:platformName" element={<MoviesAdmin/>}/>
    <Route path="/formPost/:platformName" element= {<FormPost/>} /> 
    <Route path="/formPut/:id/:platformName" element= {<FormPut/>} /> 
    <Route path="/movie/:id/:place" element={<Movie/>}/>
    <Route path="/trailer/:id/:platformName/:place" element={<TrailerProvider><Trailers/></TrailerProvider>}/>
    <Route path="/user/:id/:place" element={<UserProvider><User/></UserProvider>}/>
    <Route path="/" element={<StartPage/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
};

export default App;