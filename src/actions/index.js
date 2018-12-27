import jsonPlaceholder from '../apis/jsonPlaceholder';



//With REDUC THUNK an action creator can return either a function or an object
//Down here we are returning a function
//With REDUX THUNK you can use async await no matter what
export const fetchPosts = () => {
return async function (dispatch) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
}
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data});
};
