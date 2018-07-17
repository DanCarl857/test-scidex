import { GET_ALL_COMMENTS } from "../actions/comments.action";

export default function (state = { data: [], loading: true }, action) {
    switch(action.type) {
        case GET_ALL_COMMENTS: 
            state = Object.assign({}, state, { data: action.payload, loading: false });
            console.log(state);
            return state;
        default: 
            return state;
    }
}