import {Map} from 'immutable';
import {combineReducers} from "redux-immutablejs";

import fields from "./fields";
import validations from "./validations";

export default combineReducers({fields, validations});

