import {
	/* we need our action types here*/
	FETCHING,
	SUCCESS,
	FAILURE
} from "../actions";

const initialState = {
	characters: [],
	// Array characters, Boolean fetching, null error.
	error: null,
	fetching: false,
	next: "",
	previous: ""
};

export const charsReducer = (state = initialState, action) => {
	console.log(action);
	console.log(action.payload);
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case FETCHING:
			return {
				...state,
				fetching: true
			};
		case SUCCESS:
			return {
				...state,
				fetching: false,
				characters: action.payload.results,
				// characters: [...state.characters, ...action.payload.results],
				previous: action.payload.previous,
				next: action.payload.next
			};
		case FAILURE:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};
