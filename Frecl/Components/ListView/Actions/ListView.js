export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export function addListItem(component, id, template) {
  return {
    type: ADD_LIST_ITEM,
    component,
    id,
    template
  }
}

export function removeListItem(component, id, index) {
  return {
    type: REMOVE_LIST_ITEM,
    component,
    id,
    index
  }
}
