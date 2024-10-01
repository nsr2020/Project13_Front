import {  memo, useEffect } from "react"
import MenuVideos from "./MenuVideos"
import MenuVideo from "./MenuVideo"
import { useMenu } from "../../services/useMenu"

const MenuComponent = ({platform, id=null, place, nameMovieRef, moviesSearch,
   moviesAction, platformName,selectGenreRef }) => {

    useEffect(() => {},[platform]) 
    

  return (
   <>
   {platform && (
    <>
    <MenuVideos
      place={place}
      nameMovieRef={nameMovieRef} 
      moviesSearch={moviesSearch} 
      moviesAction={moviesAction} 
      selectGenreRef={selectGenreRef} 
     
      />
    </>
  )}
  {!platform && (
       <>
      <MenuVideo 
      place={place}
       id={id} 
       platformName={platformName}/>
       </>
  )}
  
</> 
  )
}
export default memo(MenuComponent)