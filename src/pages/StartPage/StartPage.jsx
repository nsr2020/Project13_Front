import { useEffect, useReducer } from 'react'
import BgGradient from '../../components/StarPage/BgStartPage/BgGradient'
import GifStartPage from '../../components/StarPage/GifStarPage/GifStartPage'
import ImageStartPage from '../../components/StarPage/ImageStarPage/ImageStartPage'
import { useNavigate } from 'react-router'
import { INITIAL_STATE_SP, StartPageReducer } from '../../reducer/StartPageReducer/startPage.reducer'


const StartPage = () => {
  const [state, dispatch] = useReducer(StartPageReducer, INITIAL_STATE_SP)
  const {IsFormsArea, form,isLoadingLogin, isButtonDisabledLogin, isLoadingRegister, isButtonDisabledRegister }= state;
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
      <GifStartPage IsFormsArea={IsFormsArea} dispatch={dispatch} 
      form={form} isLoadingLogin={isLoadingLogin} isButtonDisabledLogin={isButtonDisabledLogin} 
      isLoadingRegister={isLoadingRegister} isButtonDisabledRegister={isButtonDisabledRegister}/>
    </BgGradient>
  )
}
export default StartPage