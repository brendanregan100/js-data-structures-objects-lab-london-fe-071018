// Write your solution in this file!

const driver = {
  type: 'Ferrari',
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const cloneDriver = { ...obj };
  cloneDriver[key] = value
  return cloneDriver;
}

// destructivelyUpdateDriverWithKeyAndValue()

// deleteFromDriverByKey()

// destructivelyDeleteFromDriverByKey()