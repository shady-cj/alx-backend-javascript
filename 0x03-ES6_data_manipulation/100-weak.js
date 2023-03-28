const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let initialValue = weakMap.get(endpoint);
  if (initialValue === undefined) {
    initialValue = 0;
  }
  if (initialValue >= 5) {
    throw new Error('Endpoint load is high');
  }
  initialValue += 1;
  weakMap.set(endpoint, initialValue);
}

export { weakMap };
