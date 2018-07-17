import axios from 'axios';

export const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// function to get all photos
export function getAllPhotos() {
    return dispatch => {
        var url = `${BASE_URL}/photos`;
        axios({
            method: 'GET',
            url: url,
            config: { headers: { 'Content-Type': 'application/json'}} })
        .then(response => {
            dispatch({
                type: GET_ALL_PHOTOS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_PHOTOS,
                payload: [] // return empty payload so that ui does not crash on error
            });
        });
    }
}