import persistState from 'redux-localstorage';
import Immutable from "immutable";
import LOCAL_STORAGE from "../Constants/LOCAL_STORAGE";
import {isDevelopment, getConstant} from "../../Frecl/Helpers/environment";

function blackListLooper(items, index, state){
  const currentItem = items.get(index);
  const deletedState = state.deleteIn(currentItem);
  if (index < items.count() - 1) {
    return blackListLooper(items, index + 1, deletedState);
  }
  return deletedState;
}

function whiteListLooper(items, index, state, whiteListState = Immutable.Map()){
  const currentItem = items.get(index);
  const updatedState = whiteListState.mergeIn(currentItem, state.getIn(currentItem));
  if(index < items.count() - 1){
    return whiteListLooper(items, index + 1, state, updatedState);
  }
  return updatedState;
}

export default function () {
  return persistState(getConstant(LOCAL_STORAGE), {
    slicer: paths => {
      return state => {
        if(isDevelopment()){
          return blackListLooper(paths, 0, state);
        }
        return whiteListLooper(paths, 0, state);
      }
    },
    deserialize: serializedData => {
      return Immutable.fromJS(JSON.parse(serializedData));
    },
    merge: (initialState, persistedState) => {
      console.log(persistedState.toJS());
      return persistedState.merge(initialState);
    }
  })
};
