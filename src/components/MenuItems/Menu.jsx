import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState, memo } from "react"
import { useNavigate } from "react-router"
import MenuVideos from "./MenuVideos"
import MenuVideo from "./MenuVideo"

const MenuComponent = ({platform, id=null, place, nameMovieRef, moviesSearch, moviesAction, platformName }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("right") 
    const navigate = useNavigate()
   console.log(platformName);

    useEffect(() => {},[platform])

  return (
   <>
   {platform && (
    <>
    <MenuVideos placement={placement} setPlacement={setPlacement}
     navigate={navigate} isOpen={isOpen} onClose={onClose} onOpen={onOpen} place={place}
      nameMovieRef={nameMovieRef} moviesSearch={moviesSearch} moviesAction={moviesAction}/>
    </>
  )}
  {console.log(platformName)}
  {!platform && (
       <>
      <MenuVideo placement={placement} setPlacement={setPlacement}
       navigate={navigate} isOpen={isOpen} onClose={onClose} onOpen={onOpen} id={id} platformName={platformName}/>
       </>
  )}
  
</> 
  )
}
export default memo(MenuComponent)