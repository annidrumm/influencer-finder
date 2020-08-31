import React from 'react'
import InfluencerList from './components/InfluencerList.js'
import influencerData from './mocks/influencer.json'

export default function App() {
  return (
    <div className="App">
      <InfluencerList influencerData={influencerData} />
    </div>
  )
}
