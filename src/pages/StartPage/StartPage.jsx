import BgGradient from '../../components/StarPage/BgStartPage/BgGradient'
import GifStartPage from '../../components/StarPage/GifStarPage/GifStartPage'
import ImageStartPage from '../../components/StarPage/ImageStarPage/ImageStartPage'
import { useStartPage } from '../../services/useStartPage'

const StartPage = () => {
 const {IsFormsArea,dispatch,form,
  isLoadingLogin,
  isButtonDisabledLogin,
  isLoadingRegister,
  isButtonDisabledRegister} = useStartPage()
  return (
    <BgGradient>
      <ImageStartPage/>
      <GifStartPage IsFormsArea={IsFormsArea} dispatch={dispatch} 
      form={form} isLoadingLogin={isLoadingLogin} 
      isButtonDisabledLogin={isButtonDisabledLogin} 
      isLoadingRegister={isLoadingRegister} 
      isButtonDisabledRegister={isButtonDisabledRegister}/>
    </BgGradient>
  )
}
export default StartPage