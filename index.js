// Write your solution in this file!

const driver = {
  type: 'Ferrari',
};

function updateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

const newDriver = updateDriverWithKeyAndValue(driver, "color", "red");
 
// destructivelyUpdateDriverWithKeyAndValue()

// deleteFromDriverByKey()

// destructivelyDeleteFromDriverByKey()