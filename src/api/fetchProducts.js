import { API_URL } from '../constants/constants'

export default async function fetchProducts(categories) {
  const products = await fetch(`${API_URL}/products`).then(data => data.json())

  if (!categories || (Array.isArray(categories) && categories.length === 0)) {
    return products
  } else {
    const categoriesIds = categories.map(c => c.id)
    return products.filter(product => categoriesIds.includes(product.category))
  }
}
