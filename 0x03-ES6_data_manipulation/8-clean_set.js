export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let returnString = '';
  set.forEach((elem) => {
    if (elem.startsWith(startString)) {
      returnString += elem.replace(startString, '');
      returnString += '-';
    }
  });
  return returnString.slice(0, -1);
}
