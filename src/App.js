import React, { useState, useEffect } from 'react'
import InfluencerList from './pages/InfluencerList/InfluencerList.js'
import CategoryPage from './pages/CategoryPage/CategoryPage.js'
import influencerData from './mocks/influencer.json'
import { Switch, Route } from 'react-router-dom'
import NavHeader from './components/Nav/Nav.js'
import Headline from './components/Headline/Headline.js'
import GoBackArrow from './components/GoBackArrow/GoBackArrow.js'

export default function App() {
  const [influencers, setInfluencers] = useState(
    loadLocally('influencers') ?? influencerData
  )

  useEffect(() => {
    saveLocally('influencers', influencers)
  }, [influencers])

  return (
    <Switch>
      <Route exact path="/">
        <CategoryPage />
      </Route>
      <Route path="/influencerList">
        <NavHeader />
        <InfluencerList
          influencerData={influencers}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/food">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Food')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/fitness">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Fitness')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/beauty">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Beauty')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/fashion">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Fashion')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/interior">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Interior')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/travel">
        <NavHeader />
        <InfluencerList
          influencerData={influencers.filter((profile) =>
            profile.categories.includes('Travel')
          )}
          onFavouriteClick={toggleFavourite}
        />
      </Route>
      <Route path="/favourites">
        <GoBackArrow />
        <Headline headline="Favourites" />
        <InfluencerList
          onFavouriteClick={toggleFavourite}
          influencerData={influencers.filter((profile) => profile.isFavourite)}
        />
      </Route>
    </Switch>
  )

  function saveLocally(key, arrayOfObjects) {
    localStorage.setItem(key, JSON.stringify(arrayOfObjects))
  }

  function loadLocally(key) {
    try {
      const jsonString = localStorage.getItem(key)
      return JSON.parse(jsonString)
    } catch (error) {
      console.log(error)
    }
  }

  function toggleFavourite(influencer) {
    const index = influencers.indexOf(influencer)
    setInfluencers([
      ...influencers.slice(0, index),
      { ...influencer, isFavourite: !influencer.isFavourite },
      ...influencers.slice(index + 1),
    ])
  }
}
