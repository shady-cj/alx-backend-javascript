export default function appendToEachArrayValue(array, appendString) {
  for (const item of array.entries()) {
    const [idx, value] = item;
    array[idx] = appendString + value;
  }

  return array;
}
