import React from 'react'
import EntryList from '../components/EntryList'
import influencerData from '../mocks/influencer.json'

export default {
  title: 'Example/EntryList',
  component: EntryList,
}

export const Influencer = () => {
  return <EntryList influencerData={influencerData} />
}
