import { API } from "../../API/API";

export const getUserInfo = async (id, dispatch) => {
	const {
		data: { seenMovies },
	} = await API({ endpoint: `/users/${id}` });

	dispatch({ type: "GET_USER", payload: seenMovies });
};
