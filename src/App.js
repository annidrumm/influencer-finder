import React from 'react'
import InfluencerList from './components/InfluencerList/InfluencerList.js'
import influencerData from './mocks/influencer.json'

export default function App() {
  return <InfluencerList influencerData={influencerData} />
}
