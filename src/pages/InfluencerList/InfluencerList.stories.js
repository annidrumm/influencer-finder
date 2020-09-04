import React from 'react'
import InfluencerList from './InfluencerList'
import influencerData from '../../mocks/influencer.json'

export default {
  title: 'Pages/InfluencerList',
  component: InfluencerList,
}

export const fullList = () => {
  return <InfluencerList influencerData={influencerData} />
}
