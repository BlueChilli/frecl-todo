import Immutable from "immutable";

function _getSingleValueFromList(key, map) {
    return map.map((value) => {
        return value.get(key);
    })
}


function _removeDuplicatesFromList(dirtyArray, cleanArray = Immutable.List(), i = 0) {
    const value = dirtyArray.get(i);
    if (value) {
        if (cleanArray.indexOf(value) === -1) {
            return _removeDuplicatesFromList(dirtyArray, cleanArray.push(value), i + 1);
        } else {
            return _removeDuplicatesFromList(dirtyArray, cleanArray, i + 1);
        }
    } else {
        return cleanArray;
    }
}

function _createMultiValueFilter(arrayLessKey, filterItem) {
    return (value, key) => {
        if (filterItem.has(arrayLessKey) && filterItem.get(arrayLessKey) === key) {
            return value;
        } else {
            return false;
        }
    }
}

export function createFilter(filters) {
    return function (filterItem, instantSuccess) {
        return filters.every((filter, key) => {
            if (/\[\]/.test(key)) {
                const arrayLessKey = key.replace(/\[\]/, '');
                const filterValues = filter.get('value');
                if (filterValues.get(instantSuccess)) {
                    return true;
                }
                return filterValues.some(_createMultiValueFilter(arrayLessKey, filterItem));
            } else {
                const filterValue = filter.get('value');
                if (filterValue === instantSuccess) {
                    return true;
                }
                return filterItem.get(key) == filterValue || filterValue.length === 0;
            }
        }, filterItem);
    }
}


export function getFilterListFromMap(products, searchKey) {
    const terms = _getSingleValueFromList(searchKey, products);
    return _removeDuplicatesFromList(terms);
}
