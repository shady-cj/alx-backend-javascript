export default function hasValuesFromArray(set, array) {
  return array.every((elem) => set.has(elem));
}
