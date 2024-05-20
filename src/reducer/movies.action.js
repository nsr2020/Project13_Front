const categories = ["Action", "Comedy", "Horror", "Kids"];

export const handleSubmitLogin = async ( userName, password, toast, navigate, isLoading) => {
    isLoading(true)
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
            isLoading(false)
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

export const handleSubmitRegister = async (userName, password, name, lastName, email, image, toast, navigate, isButtonDisable, isLoading) => {
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
      console.log(response);

      if (response.status === 201) {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 500,
            isClosable: true,
          })
          handleSubmitLogin(userName, password, toast, navigate, isButtonDisable,isLoading)
      } else {
          
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

export const fetchMovies = async (setMoviesAction, setMoviesComedy, setMoviesHorror, setMoviesKids, platformName) => {
    
    try {
      const fetchPromises = categories.map(category =>
        fetch(`https://project-13-back.vercel.app/api/v1/movies/platform_category/${platformName}/${category}`)
          .then(response => response.json())
      );
      console.log(response);

      const [actionMovies, comedyMovies, horrorMovies, kidsMovies] = await Promise.all(fetchPromises);

      setMoviesAction(actionMovies);
      setMoviesComedy(comedyMovies);
      setMoviesHorror(horrorMovies);
      setMoviesKids(kidsMovies);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };