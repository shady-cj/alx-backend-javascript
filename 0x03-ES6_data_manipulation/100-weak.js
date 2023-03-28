const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let initialValue = weakMap.get(endpoint);
  if (initialValue === undefined) {
    initialValue = 0;
  }
  initialValue += 1;
  if (initialValue >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, initialValue);
}

export { weakMap };
