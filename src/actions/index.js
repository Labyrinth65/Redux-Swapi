// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getChars = URL => dispatch => {
	dispatch({ type: FETCHING });
	axios
		.get(URL)
		.then(res => {
			console.log(res);
			dispatch({ type: SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FAILURE, payload: err }));
};
