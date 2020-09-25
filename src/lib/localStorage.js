export function saveLocally(key, arrayOfObjects) {
  localStorage.setItem(key, JSON.stringify(arrayOfObjects))
}

export function loadLocally(key) {
  try {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
  }
}
