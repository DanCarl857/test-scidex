import { combineReducers } from 'redux';
import photos from './photos.reducer';
import comments from './comments.reducer';

export const rootReducer = combineReducers({
    photos,
    comments
});