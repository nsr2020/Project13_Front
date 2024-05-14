import StarField from '../../components/StarPage/BgStartPage/StarField'
import ImageStarField from '../../components/StarPage/ImageStarPage/ImageStarField'
import GifStartPage from '../../components/StarPage/GifStarPage/GifStartPage'

const StartPage = () => {
  return (
    <StarField >
      <ImageStarField/>
      <GifStartPage/>
    </StarField>
  )
}
export default StartPage