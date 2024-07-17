export function getObjectByName(data, name) {
  if (!Array.isArray(data)) return;

  return data.find(obj => obj.name === name);
}
