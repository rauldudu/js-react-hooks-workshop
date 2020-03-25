import { API_URL } from '../constants/constants'

export default async function saveActivity(activity) {
  const data = await fetch(`${API_URL}/activities`, {
    method: 'POST',
    body: JSON.stringify(activity),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return data.json()
}
