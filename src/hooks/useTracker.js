import { useEffect } from 'react'
import saveActivity from '../api/saveActivity'

// { page: page, type: "enter", date: new Date() }
export default function useTracker(page) {
  useEffect(() => {
    saveActivity({ page, type: 'enter', date: new Date() })

    return () => {
      saveActivity({ page, type: 'leave', date: new Date() })
    }
  }, [page])
}
