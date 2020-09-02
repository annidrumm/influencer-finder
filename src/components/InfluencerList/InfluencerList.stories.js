import React from 'react'
import InfluencerList from './InfluencerList'
import influencerData from '../../mocks/influencer.json'

export default {
  title: 'InfluencerList',
  component: InfluencerList,
}

export const Influencer = () => {
  return <InfluencerList influencerData={influencerData} />
}
