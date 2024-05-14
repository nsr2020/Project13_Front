import { Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";



const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<StartPage/>}/>
   </Routes>
   </>
  );
};

export default App;