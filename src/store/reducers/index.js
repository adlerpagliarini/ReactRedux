import { combineReducers } from 'redux';
import sidebarReducer from './sidebar';

export default combineReducers(
    {
        sidebarReducer,
    }
);

// { modules: [], activeLesson: , activeModule: }
// muda para
// { siderbar: { modules: [], activeLesson: , activeModule: } }