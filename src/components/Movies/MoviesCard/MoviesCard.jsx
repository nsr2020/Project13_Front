import MoviesCardAction from "./MoviesCardAction"
import MoviesCardComedy from "./MoviesCardComedy"
import MoviesCardHorror from "./MoviesCardHorror"
import MoviesCardKids from "./MoviesCardKids"

const MoviesCard = ({moviesAction, moviesComedy, moviesHorror, moviesKids, platformName}) => { 
    console.log(platformName); 
  return (
    <>
   <MoviesCardAction moviesAction={moviesAction} platformName={platformName}/>
    <MoviesCardComedy moviesComedy={moviesComedy} platformName={platformName}/>
    <MoviesCardHorror moviesHorror={moviesHorror} platformName={platformName}/>
    <MoviesCardKids moviesKids={moviesKids} platformName={platformName}/>
    </>
  )
}

export default MoviesCard