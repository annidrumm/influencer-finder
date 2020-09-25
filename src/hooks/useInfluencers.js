import { useState, useEffect } from 'react'
import influencerData from '../mocks/influencer.json'
import { saveLocally, loadLocally } from '../lib/localStorage'

export default function useInfluencers() {
  const [influencers, setInfluencers] = useState(
    loadLocally('influencers') ?? influencerData
  )

  useEffect(() => {
    saveLocally('influencers', influencers)
  }, [influencers])

  return [influencers, setInfluencers]
}
