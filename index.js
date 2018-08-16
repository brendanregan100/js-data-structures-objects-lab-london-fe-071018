// Write your solution in this file!

const driver = {
  type: 'Ferrari',
};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
 
  return newObj;
}

// destructivelyUpdateDriverWithKeyAndValue()

// deleteFromDriverByKey()

// destructivelyDeleteFromDriverByKey()