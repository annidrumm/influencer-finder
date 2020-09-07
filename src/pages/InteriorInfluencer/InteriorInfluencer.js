import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function InteriorInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Interior')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
