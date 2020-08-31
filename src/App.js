import React from 'react'
import EntryList from './components/EntryList.js'
import influencerData from './mocks/influencer.json'

export default function App() {
  return (
    <div className="App">
      <EntryList influencerData={influencerData} />
    </div>
  )
}
