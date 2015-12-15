import ACTIONS from "./Constants";


export function declare(id) {
    return {
        type: ACTIONS.SPINNER_DECLARE,
        id: id
    }
}

export function show(id) {
    return {
        type: ACTIONS.SPINNER_SHOW,
        id: id
    }
}

export function hide(id) {
    return {
        type: ACTIONS.SPINNER_HIDE,
        id: id
    }
}
