import {legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { reducer as userreducer } from "./UserAuth/reducer"
import { reducer as projectreducer } from "./Project/reducer"
import { reducer as projectuploadreducer } from "./ProjectUpload/reducer"
import { reducer as uplodedatareducer } from "./Uploaddata/reducer"
import thunk from "redux-thunk"
const rootreducer=combineReducers({userreducer,projectreducer,projectuploadreducer,uplodedatareducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))