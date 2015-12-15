function _getItemAtPath(lastObject, index, path) {
    if (lastObject && path[index]) {
        var testedProperty = _testProperty(lastObject, path[index]);
        return _getItemAtPath(testedProperty, index + 1, path);
    }
    return lastObject;
}

function _testProperty(object, property) {
    if (object[property]) {
        return object[property];
    } else {
        return false;
    }
}

export function isObjectPathValid(object, path) {
    return Object.isObject(_getItemAtPath(object, 0, path));
}

export function getItemFromPath(object, path, itemIsUndefined = false){
    return _getItemAtPath(object, 0, path) || itemIsUndefined;
}