import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function FashionInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Fashion')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
