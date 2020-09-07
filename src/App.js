import React from 'react'
import InfluencerList from './pages/InfluencerList/InfluencerList.js'
import CategoryPage from './pages/CategoryPage/CategoryPage.js'
import influencerData from './mocks/influencer.json'
import { Switch, Route } from 'react-router-dom'
import FoodInfluencer from './pages/FoodInfluencer/FoodInfluencer.js'
import FitnessInfluencer from './pages/FitnessInfluencer.js/FitnessInfluencer.js'
import BeautyInfluencer from './pages/BeautyInfluencer.js/BeautyInfluencer.js'
import FashionInfluencer from './pages/FashionInfluencer.js/FashionInfluencer.js'
import InteriorInfluencer from './pages/InteriorInfluencer/InteriorInfluencer.js'
import TravelInfluencer from './pages/TravelInfluencer/TravelInfluencer.js'
import FavouritePage from './pages/FavouritePage/FavouritePage.js'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CategoryPage />
      </Route>
      <Route path="/influencerList" component={InfluencerList}>
        <InfluencerList influencerData={influencerData} />
      </Route>
      <Route path="/food" component={InfluencerList}>
        <FoodInfluencer />
      </Route>
      <Route path="/fitness" component={InfluencerList}>
        <FitnessInfluencer />
      </Route>
      <Route path="/beauty" component={InfluencerList}>
        <BeautyInfluencer />
      </Route>
      <Route path="/fashion" component={InfluencerList}>
        <FashionInfluencer />
      </Route>
      <Route path="/interior" component={InfluencerList}>
        <InteriorInfluencer />
      </Route>
      <Route path="/travel" component={InfluencerList}>
        <TravelInfluencer />
      </Route>
      <Route path="/favourites" component={FavouritePage}>
        <FavouritePage />
      </Route>
    </Switch>
  )
}
