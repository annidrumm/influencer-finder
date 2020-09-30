import React from 'react'
import InfluencerList from './InfluencerList'
import influencerData from '../../mocks/influencer.json'
import HeaderInfluencerList from '../../components/Header/HeaderInfluencerList'

export default {
  title: 'Pages/InfluencerList',
  component: InfluencerList,
}

export const fullList = () => {
  return (
    <>
      <HeaderInfluencerList headline="Browse" />
      <InfluencerList influencerData={influencerData} />
    </>
  )
}
