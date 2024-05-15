import { Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Platforms from "./pages/Platforms/Platforms";



const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<StartPage/>}/>
    <Route path="/platforms" element={<Platforms/>}/>
    <Route path="/movies" element={<StartPage/>}/>
    <Route path="/movie" element={<StartPage/>}/>
    <Route path="/trailers" element={<StartPage/>}/>
    <Route path="*" element={<StartPage/>}/>
   </Routes>
   </>
  );
};

export default App;