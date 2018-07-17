import axios from 'axios';

export const GET_ALL_COMMENTS = 'GET_ALL_PHOTOS';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// function to get all photos
export function getAllComments() {
    return dispatch => {
        var url = `${BASE_URL}/comments`;
        axios({
            method: 'GET',
            url: url,
            config: { headers: { 'Content-Type': 'application/json'}} })
        .then(response => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: [] // return empty payload so that ui does not crash on error
            });
        });
    }
}