export const calculateTotal = items => {
  return items
    .map(item => item.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2)
}
