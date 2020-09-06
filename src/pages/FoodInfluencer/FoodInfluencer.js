import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function FoodInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Food')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
