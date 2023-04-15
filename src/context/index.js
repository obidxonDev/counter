import { combineReducers } from "redux";
import count from './count'

const rootReducer = combineReducers({
   redux: () => "water",
   count: count
})

export default rootReducer