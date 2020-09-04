import React from 'react'
import InfluencerList from './pages/InfluencerList/InfluencerList.js'
import CategoryPage from './pages/CategoryPage/CategoryPage.js'
import influencerData from './mocks/influencer.json'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CategoryPage />
      </Route>
      <Route path="/influencerList" component={InfluencerList}>
        <InfluencerList influencerData={influencerData} />
      </Route>
    </Switch>
  )
}
