import { API } from "../../API/API";

const categories = ["Action", "Comedy", "Horror", "Kids","Releases"];

export const fetchMovies = async (platformName, dispatch) => {
  try {
    const fetchPromises = categories.map(category =>
      API({ endpoint: `/movies/search/*/${platformName}/${category}` })
    );
    const responses = await Promise.all(fetchPromises);

    const actionMovies = responses[0].data;
    const comedyMovies = responses[1].data;
    const horrorMovies = responses[2].data;
    const kidsMovies = responses[3].data;
    const releasesMovies = responses[4].data;

    
    dispatch({ type: "MOVIES_ACTION", payload: actionMovies });
    dispatch({ type: "MOVIES_COMEDY", payload: comedyMovies });
    dispatch({ type: "MOVIES_HORROR", payload: horrorMovies });
    dispatch({ type: "MOVIES_KIDS", payload: kidsMovies });
    dispatch({ type: "MOVIES_RELEASES", payload: releasesMovies });
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
            case "Releases":
              dispatch({type:"INDEX_RELEASES", payload:newIndex})
            break;
        default:
            break;
    }
  };

