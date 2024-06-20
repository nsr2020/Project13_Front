import { urlMoviesByPlatformAndCategory } from "../../utils/infoFetchUrl/fetchUrl";

const categories = ["Action", "Comedy", "Horror", "Kids"];

export const fetchMovies = async( platformName, dispatch) => {
    
    try {
      const fetchPromises = categories.map(category =>
        fetch(`${urlMoviesByPlatformAndCategory}${platformName}/${category}`)
          .then(response => response.json())
      );

      const [actionMovies, comedyMovies, horrorMovies, kidsMovies] = await Promise.all(fetchPromises);

      dispatch({type:"MOVIES_ACTION", payload:actionMovies});
      dispatch({type:"MOVIES_COMEDY", payload:comedyMovies});
      dispatch({type:"MOVIES_HORROR", payload:horrorMovies});
      dispatch({type:"MOVIES_KIDS", payload:kidsMovies});
    } catch (error) {
      console.error("Failed to fetch movies:", error);
     
    }
  };

  export const handleClickCardImage = (newIndex,category, dispatch) => {
    switch (category) {
        case "Action":
           
            dispatch({type:"INDEX_ACTION", payload:newIndex})
            break;
        case "Comedy":
         
            dispatch({type:"INDEX_COMEDY", payload:newIndex})
            break;
        case "Horror":
       
            dispatch({type:"INDEX_HORROR", payload:newIndex})
            break;
        case "Kids":
            dispatch({type:"INDEX_KIDS", payload:newIndex})
            break;
        default:
            break;
    }
  };

