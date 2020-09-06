import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function BeautyInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Beauty')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
