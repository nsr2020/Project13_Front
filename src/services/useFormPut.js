import { useToast } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { MovieContext } from "../providers/MovieProvider";
import { fetchMovie } from "../reducer/MovieReducer/movie.action";

export const usePutForm = () => {
    const { state, dispatch } = useContext(MovieContext);
    const { movie } = state;
    
    const { id, platformName } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const nameRef = useRef(null);
    const imageRef = useRef(null);
    const categoryRef = useRef(null);
    const trailerRef = useRef(null);
    const starsRef = useRef(null);
    const platformRef = useRef(null);
    const user = localStorage.getItem("userName");
    const rol = JSON.parse(user).rol;

    useEffect(() => {
        if (!user || rol !== "admin") {
            navigate("/");
        }
        fetchMovie(id, dispatch);
    }, [user, navigate, id, dispatch]);

    /* const name = nameRef.current?.value || movie.name;
    const image = imageRef.current?.files?.[0] || movie.image;
    const category = categoryRef.current?.value || movie.category;
    const trailer = trailerRef.current?.value || movie.trailer;
    const stars = starsRef.current?.value || movie.stars;
    const platform = platformRef.current?.value || movie.platform; */

    return {
        movie, toast, navigate, platformName, nameRef, imageRef,
        categoryRef, trailerRef, starsRef, platformRef,dispatch
    };
};
