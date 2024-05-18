export const handleSubmitLogin = async ( userName, password, toast, navigate) => {

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