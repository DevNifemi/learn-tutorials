import tutorialTitleReducer from "./reducers/tutorialTitles.reducer";
import tutorialContentsReducer from "./reducers/tutorilaContent.reducer";
import activeId from "./reducers/activeId.reducer";
import {combineReducers} from 'redux'


const reducer = combineReducers({
    tutorialTitleReducer,
    tutorialContentsReducer,
    activeId
})

export default reducer;