import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
	cat: 'https://timesofindia.indiatimes.com/photo/67586673.cms',
	isFetching: false,
	error: ''
}

export const reducer = (state = initialState, action) => {

	switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        isFetching:false,
        person: action.payload
      });
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};