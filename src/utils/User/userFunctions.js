export const getUserInfo = (id, setUserMovies) =>{
    fetch(`https://project-13-back.vercel.app/api/v1/users/${id}`)
    .then((res)=> res.json())
    .then((data)=> setUserMovies(data.seenMovies))
}

export const handleDeleteMovie = async (id, user, setUserMovies, toast) => {
    user.seenMovies = user.seenMovies.filter((idseen) => idseen !== id);
    localStorage.setItem("userName", JSON.stringify(user));

    const res = await fetch(`https://project-13-back.vercel.app/api/v1/users/remove-seenMovies/${user._id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ seenMovies: [id] })
    });

    if (res.status === 400) {
        toast({
            title: "Error",
            description: "Movie could not be removed",
            status: "error",
            duration: 3000,
            isClosable: true,
        });
        return
    } else if (res.status === 200) {
        toast({
            title: "Success",
            description: "Movie removed successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        getUserInfo(user._id, setUserMovies)
    }
};

export const handleLogOutClick = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    navigate("/");
};