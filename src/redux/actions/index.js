import axios from 'axios'

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (userId) => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = new Set();
    getState().posts.forEach( post => userIds.add(post.userId))
    for (let userId of userIds) dispatch(fetchUser(userId))
}