import BgGradient from '../../components/StarPage/BgStartPage/BgGradient'
import GifStartPage from '../../components/StarPage/GifStarPage/GifStartPage'
import ImageStartPage from '../../components/StarPage/ImageStarPage/ImageStartPage'

const StartPage = () => {
 
  return (
    <BgGradient>
      <ImageStartPage/>
      <GifStartPage/>
    </BgGradient>
  )
}
export default StartPage