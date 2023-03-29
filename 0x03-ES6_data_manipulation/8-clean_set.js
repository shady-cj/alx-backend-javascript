export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined || startString === null || typeof startString !== 'string') {
    return '';
  }
  let returnString = '';
  set.forEach((elem) => {
    if (elem && elem.startsWith(startString)) {
      returnString += elem.replace(startString, '');
      returnString += '-';
    }
  });
  return returnString.slice(0, -1);
}
