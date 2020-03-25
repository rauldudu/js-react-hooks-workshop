import { useCart } from '../contexts/Cart'

export default function useTotal() {
  const { items } = useCart()
  const total = items.map(item => item.price).reduce((a, b) => a + b, 0)
  return total.toFixed(2)
}
