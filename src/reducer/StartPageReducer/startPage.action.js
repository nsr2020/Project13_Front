import { API } from "../../API/API";

export const handleSubmitLogin = async ( userName, password, toast, navigate, dispatch) => {
    dispatch({type:"IS_LOADING_LOGIN", payload:true})
    try {
       /*  const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        }; */

        const response = await API({endpoint:`/users/login`, method: 'POST',body:{ userName, password }});
        /* const data = await response.json(); */

        if (response.data.userName || response.data.token) {
            localStorage.setItem('userName', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            toast({
                title: 'Login success',
                description: "The login was successful",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              setTimeout(() => {
                if(response.data.user.rol === "user"){
                  navigate(`/platforms`)
                  dispatch({type:"IS_LOADING_LOGIN", payload:false})
                  dispatch({type:"IS_FORMS_AREA"})
                  
                }else{
                  const platformName = "Netflix"
                  navigate(`/moviesAdmin/${platformName}`) 
                  dispatch({type:"IS_LOADING_LOGIN", payload:false})
                  dispatch({type:"IS_FORMS_AREA"})
                }
                
              },2000)
            
        } else { 
          dispatch({type:"IS_LOADING_LOGIN", payload:false})
           toast({
            title: "Error",
            description: "User or password incorrect",
            status: "error",
            duration: 3000,
            isClosable: true,
           })
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  export const handleSubmitRegister = async (userName, password, name, lastName, email, image, toast, navigate, dispatch) => {
    dispatch({ type: "IS_LOADING_REGISTER", payload: true });
    const formData = new FormData();
      formData.set('userName', userName);
      formData.set('password', password);
      formData.set('name', name);
      formData.set('lastName', lastName);
      formData.set('email', email);
      formData.set('image', image);
    
    try {
      const response = await API({
        endpoint: "/users/register",
        method: "POST",
        body:formData,
        CT: "multipart/form-data"

      });
  
      if (response.status === 201) {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 500,
          isClosable: true,
        });
        handleSubmitLogin(userName, password, toast, navigate, dispatch);
      } else {
        dispatch({ type: "IS_LOADING_REGISTER", payload: false });
        toast({
          title: "Error",
          description: "Account has not been created successfully",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      dispatch({ type: "IS_LOADING_REGISTER", payload: false });
      toast({
        title: "Error",
        description: "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  export const handleChangeInputLogin = (userName,isValidPassword,dispatch) => {
		if (userName.length >= 5 && isValidPassword) {
			dispatch({ type: "IS_LOGIN_BUTTON", payload: false });
		} else {
			dispatch({ type: "IS_LOGIN_BUTTON", payload: true });
		}
	};

  export const handleInputChangeRegister = (userName,isValidPassword,name,lastName,email,isValidEmail,dispatch) => {
    if (userName.length >= 5 && isValidPassword(password) && name.length > 0 && lastName.length > 0 && isValidEmail(email)) {
      dispatch({type: "IS_REGISTER_BUTTON", payload: false});
    } else {
      dispatch({type: "IS_REGISTER_BUTTON", payload: true});
    }
  };

  export const handleFileInputClick = (imageRef) => {
    imageRef.current.click();
  };
  

