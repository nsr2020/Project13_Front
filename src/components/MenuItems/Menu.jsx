import {  memo, useEffect } from "react"
import MenuVideos from "./MenuVideos"
import MenuVideo from "./MenuVideo"
import { useMenu } from "../../services/useMenu"

const MenuComponent = ({platform, id=null, place, nameMovieRef, moviesSearch,
   moviesAction, platformName,selectGenreRef }) => {

    useEffect(() => {},[platform]) 
    const {isOpen,onOpen,onClose,dispatch,toast,navigate,placement}=useMenu()

  return (
   <>
   {platform && (
    <>
    <MenuVideos placement={placement} 
     navigate={navigate} isOpen={isOpen} onClose={onClose} onOpen={onOpen} place={place}
      nameMovieRef={nameMovieRef} 
      moviesSearch={moviesSearch} 
      moviesAction={moviesAction} 
      selectGenreRef={selectGenreRef} 
      dispatch={dispatch}
      toast={toast}
      />
    </>
  )}
  {!platform && (
       <>
      <MenuVideo placement={placement} setPlacement={placement} place={place}
       navigate={navigate} isOpen={isOpen} 
       onClose={onClose} onOpen={onOpen} id={id} 
       platformName={platformName} toast={toast}/>
       </>
  )}
  
</> 
  )
}
export default memo(MenuComponent)