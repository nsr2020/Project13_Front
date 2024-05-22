export const handleClickCardImage = (newIndex,category,setIndexAction, setIndexComedy, setIndexHorror, setIndexKids) => {
    switch (category) {
        case "Action":
            setIndexAction(newIndex)
            break;
        case "Comedy":
            setIndexComedy(newIndex)
            break;
        case "Horror":
            setIndexHorror(newIndex)
            break;
        case "Kids":
            setIndexKids(newIndex)
            break;
        default:
            break;
    }
  };

  export const handleClickIconInfoMovie = (id, navigate) =>{
    navigate(`/movie/${id}`)
}