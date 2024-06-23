import { API } from "../../API/API"

export const getPlatforms = async (dispatch) => {
    const {data} = await API({ endpoint: "/platforms" });

    dispatch({ type: "GET_PLATFORMS", payload:data });
};