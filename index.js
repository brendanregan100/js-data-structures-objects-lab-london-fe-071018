// Write your solution in this file!

const driver = {
  type: 'Ferrari',
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const cloneDriver = Object.assign({}, obj);
  cloneDriver[key] = value;
  return cloneDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(key, value) {
  const deleteDriver = 
  Object.assign({}, driver);
  delete deleteDriver.type;
  return deleteDriver;
}


// destructivelyDeleteFromDriverByKey()