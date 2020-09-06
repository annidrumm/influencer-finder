import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function TravelInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Travel')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
