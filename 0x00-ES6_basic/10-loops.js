export default function appendToEachArrayValue(array, appendString) {
  const retArr = [];
  for (const value of array) {
    retArr.push(appendString + value);
  }

  return retArr;
}
