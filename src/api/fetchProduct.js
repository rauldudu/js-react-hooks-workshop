import { API_URL } from '../constants/constants'

export default async function fetchProduct(id) {
  return await fetch(`${API_URL}/products/${id}`).then(data => data.json())
}
