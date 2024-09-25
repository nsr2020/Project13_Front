import { API } from "../../API/API"


export const handleClickPostForm = async (name,avatar,category,trailer,
    stars,platform,toast,navigate,
    dispatch,platformName) =>{
dispatch({type:'IS_LOADING_POST', payload:true})
    const formData = new FormData()
    formData.set('name',name)
    formData.set('image',avatar)
    formData.set('category',category)
    formData.set('trailer',trailer)
    formData.set('stars',stars)
    formData.set('platform',platform)

    try{
        const response = await API({
            endpoint:'/movies',
            method:'POST',
            body:formData,
            CT:'multipart/form-data'
        })
        if(response.status === 201){
            toast({
                title: 'Movie created.',
                description: "We've created a new movie",
                status: 'success',
                duration: 500,
                isClosable: true,
            })
            navigate(`/moviesAdmin/${platformName}`)
            dispatch({type:'IS_LOADING_POST', payload:false})
        }else{
            toast({
                title: 'Error creating movie.',
                description: "Error creating movie",
                status: 'error',
                duration: 500,
                isClosable: true,
            })
            dispatch({type:'IS_LOADING_POST', payload:false})
        }
    }catch{

        toast({
                title: 'Error creating movie.',
                description: "Error creating movie",
                status: 'error',
                duration: 500,
                isClosable: true,
        })
        dispatch({type:'IS_LOADING_POST', payload:false})
    }
}

export const handleOnchangePostForm = (name,image,category,trailer,stars,platform, dispatch) => {
    const starsValue = parseInt(stars);
  
    if (
        name.length > 2 &&
        image &&
        category.length &&
        trailer.length &&
        ((starsValue >=0 & starsValue <= 5)) &&
        platform.length
    ){        dispatch({ type: "IS_BUTTON_DISABLED_POST", payload: false });
    } else {
        dispatch({ type: "IS_BUTTON_DISABLED_POST", payload: true });
    }
};
