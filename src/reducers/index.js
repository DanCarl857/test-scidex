import { combineReducers } from 'redux';
import photos from './photos.reducer';

export const rootReducer = combineReducers({
    photos: photos
});