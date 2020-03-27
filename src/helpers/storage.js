export const getFromLocalStorage = key => {
  const localItems = localStorage.getItem(key)
  return JSON.parse(
    localItems && localItems[0] === '[' ? localItems : JSON.stringify([])
  )
}

export const saveToLocalStorage = (key, items) =>
  localStorage.setItem(key, JSON.stringify(items))
