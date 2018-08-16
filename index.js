// Write your solution in this file!

const driver = {
  type: 'Ferrari',
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const cloneDriver = Object.assign({}, obj);
  cloneDriver[key] = value;
  return cloneDriver;
}

// destructivelyUpdateDriverWithKeyAndValue()

// deleteFromDriverByKey()

// destructivelyDeleteFromDriverByKey()