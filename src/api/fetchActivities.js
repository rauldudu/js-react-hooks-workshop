import { API_URL } from '../constants/constants'

export default async function fetchActivities() {
  return await fetch(`${API_URL}/activities`).then(data => data.json())
}
