import React from 'react'
import influencerData from '../../mocks/influencer.json'
import InfluencerList from '../InfluencerList/InfluencerList'

export default function FitnessInfluencer() {
  const filteredCategories = influencerData.filter(function (profile) {
    return profile.categories.includes('Fitness')
  })

  return <InfluencerList influencerData={filteredCategories} />
}
