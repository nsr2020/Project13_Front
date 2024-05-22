import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import MenuVideos from "./MenuVideos"
import MenuVideo from "./MenuVideo"



const MenuComponent = ({platform, id=null, place}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState("right") 
    const navigate = useNavigate()

    useEffect(() => {},[platform])

   
  return (
   <>
   {platform && (
    <>
    <MenuVideos placement={placement} setPlacement={setPlacement}
     navigate={navigate} isOpen={isOpen} onClose={onClose} onOpen={onOpen} place={place}/>
    </>
  )}
  {!platform && (
       <>
      <MenuVideo placement={placement} setPlacement={setPlacement}
       navigate={navigate} isOpen={isOpen} onClose={onClose} onOpen={onOpen} id={id}/>
       </>
  )}
  
</> 
  )
}
export default MenuComponent