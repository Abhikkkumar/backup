const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
console.log("input",input);

const output = input.reduce((result, currentObject) => {
  // Merge each object into the result object
  for (const key in currentObject) {
    if (currentObject.hasOwnProperty(key)) {
      result[key] = currentObject[key];
    }
  }
  return result;
}, {});
console.log("output",output);
