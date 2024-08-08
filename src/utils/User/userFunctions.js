import { useToast } from "@chakra-ui/react";
import { API } from "../../API/API";
import { getUserInfo } from "../../reducer/UserInfoReducer/user.action";

export const handleDeleteMovie = async (id, dispatch, user, toast) => {
    if (!user || !user._id) {
      console.error("User is undefined or invalid");
      toast({
        title: "Error",
        description: "Invalid user information",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    user.seenMovies =  user.seenMovies.filter((idseen) => idseen !== id) 
    localStorage.setItem("userName", JSON.stringify(user));
  
    try {
      const res = await API({
        endpoint:`/users/remove-seenMovies/${user._id}`,
        method: "POST",
        body: { seenMovies: [id] }
      });
  
      if (res.status === 400) {
        toast({
          title: "Error",
          description: "Movie could not be removed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      } else if (res.status === 200) {
        toast({
          title: "Success",
          description: "Movie removed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getUserInfo(user._id, dispatch);
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      toast({
        title: "Error",
        description: "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

export const handleLogOutClick = (navigate,toast) => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    navigate("/");
    toast({
      title: "Session Closed successfully",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
  });
};