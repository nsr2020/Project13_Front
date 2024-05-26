

export const handleSubmitLogin = async ( userName, password, toast, navigate, dispatch) => {
    dispatch({type:"IS_LOADING_LOGIN", payload:true})
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, password })
        };

        const response = await fetch('https://project-13-back.vercel.app/api/v1/users/login', requestOptions);
        const data = await response.json();

        if (data.userName || data.token) {
            localStorage.setItem('userName', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            toast({
                title: 'Login success',
                description: "The login was successful",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              setTimeout(() => {
                navigate("/platforms")
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
    dispatch({type: "IS_LOADING_REGISTER" , payload: true})
    try {
      const formData = new FormData();
      formData.set('userName', userName);
      formData.set('password', password);
      formData.set('name', name);
      formData.set('lastName', lastName);
      formData.set('email', email);
      formData.set('image', image);
          
      const requestOptions = {
        method: 'POST',
        body: formData,
    };

      const response = await fetch('https://project-13-back.vercel.app/api/v1/users/register', requestOptions);

      if (response.status === 201) {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 500,
            isClosable: true,
          })
          handleSubmitLogin(userName, password, toast, navigate, dispatch)
      } else {
        dispatch({type: "IS_LOADING_REGISTER" , payload: false})
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
  }
  }

