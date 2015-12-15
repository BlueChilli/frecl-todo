import Immutable from "immutable";
import ACTIONS from './Constants';

var initialState = Immutable.Map();

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case ACTIONS.SPINNER_DECLARE:
            return state;
        case ACTIONS.SPINNER_HIDE:
            console.log("Spin Hide", action.id);
            return state.setIn([action.id], false);
        case ACTIONS.SPINNER_SHOW:
            console.log("Spin Show", action.id);
            return state.setIn([action.id], true);
        default:
            return state;
    }
}
