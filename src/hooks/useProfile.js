import { useState, useEffect } from 'react'
import { saveLocally, loadLocally } from '../lib/localStorage'

export default function useProfile() {
  const [userProfile, setUserProfile] = useState(loadLocally('userProfile'))

  useEffect(() => {
    loadLocally('userProfile') || saveLocally('userProfile', userProfile)
  }, [userProfile])

  return [userProfile, setUserProfile]
}
