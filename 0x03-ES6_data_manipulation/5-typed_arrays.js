export default function createInt8TypedArray(length, position, number) {
  const buffer = new ArrayBuffer(length);
  const intView = new Int8Array(buffer);
  intView[position] = number;
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dataview = new DataView(buffer);
  return dataview;
}
