export default function updateUniqueItems(map) {
  try {
    for (const item of map) {
      const [mapKey, mapValue] = item;
      if (mapValue === 1) {
        map.set(mapKey, 100);
      }
    }
  } catch (err) {
    throw new Error('Cannot process');
  }
  return map;
}
