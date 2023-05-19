import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers} from "redux";
import {
    subjectReducer,
    partnersReducer,
    contactReducer,
    socialsReducer,
    aboutReducer,
    // supportReducer,
    supportFullReducer,
    newsFullReducer,
    workersReducer,
    workersFullReducer,
    yearsReducer,
    freeSupportFullReducer,

} from "./reducers";

const rootReducer = combineReducers({
    subject: subjectReducer,
    partners: partnersReducer,
    contact: contactReducer,
    socials: socialsReducer,
    about: aboutReducer,
    // support: supportReducer,
    supportFull: supportFullReducer,
    newsFull: newsFullReducer,
    workers: workersReducer,
    workersFull: workersFullReducer,
    years: yearsReducer,
    freeSupportFull: freeSupportFullReducer,

});


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
