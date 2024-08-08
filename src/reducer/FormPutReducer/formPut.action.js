import { API } from "../../API/API"

export const handleSubmitPutForm = async (name,image,category,trailer,stars,platform,
    navigate,toast,dispatch,platformName,id,)=>{
        
dispatch({type:'IS_LOADING_PUT',payload:true})
const formData = new FormData()
    formData.set('name',name)
    formData.set('image',image)
    formData.set('category',category)
    formData.set('trailer',trailer)
    formData.set('stars',stars)
    formData.set('platform',platform)
try{
    const response = await API({
        endpoint:`/movies/${id}`,
        method:'PUT',
        body:formData,
        CT:'multipart/form-data'
    })
    if(response.status === 200){
        toast({
            title: 'Movie updated.',
            description: "",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
        navigate(`/moviesAdmin/${platformName}`)
        dispatch({type:'IS_LOADING_PUT', payload:false})
    }else if(response.status === 404) {
        toast({
            title: 'Movie not found.',
            description: "",
            status: 'error',
            duration: 1000,
            isClosable: true,
        })
        dispatch({type:'IS_LOADING_PUT', payload:false})
    }
}catch{
    toast({
        title: 'Error updating movie.',
        description: "",
        status: 'error',
        duration: 1000,
        isClosable: true,
})
dispatch({type:'IS_LOADING_PUT', payload:false})
}
}