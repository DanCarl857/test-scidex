import { GET_ALL_PHOTOS } from "../actions/photos.action";

export default function (state = { data: [], loading: true }, action) {
    switch(action.type) {
        case GET_ALL_PHOTOS: 
            state = Object.assign({}, state, { data: action.payload, loading: false });
            console.log(state);
            return state;
        default: 
            return state;
    }
}