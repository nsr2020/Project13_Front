import { useEffect } from 'react'
import BgGradient from '../../components/StarPage/BgStartPage/BgGradient'
import GifStartPage from '../../components/StarPage/GifStarPage/GifStartPage'
import ImageStartPage from '../../components/StarPage/ImageStarPage/ImageStartPage'
import { useNavigate } from 'react-router'


const StartPage = () => {
  const user = localStorage.getItem('userName')
  const navigate = useNavigate()
  useEffect(()=>{
    if(user){
      navigate("/platforms")
    }
  })
  return (
    <BgGradient>
      <ImageStartPage/>
      <GifStartPage/>
    </BgGradient>
  )
}
export default StartPage