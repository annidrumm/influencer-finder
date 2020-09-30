import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage/NavigationPage.js'
import StartPage from './pages/StartPage/StartPage.js'
import CreateProfile from './components/CreateProfile/CreateProfile.js'
import Profile from './components/Profile/Profile.js'
import CategoryPage from './pages/CategoryPage/CategoryPage.js'
import InfluencerList from './pages/InfluencerList/InfluencerList.js'
import HeaderInfluencerList from './components/Header/HeaderInfluencerList'
import HeaderFavourites from './components/Header/HeaderFavourites'
import HeaderCreateProfile from './components/Header/HeaderCreateProfile'
import useInfluencers from './hooks/useInfluencers'
import useProfile from './hooks/useProfile'
import FavouritePage from './pages/FavouritePage/FavouritePage.js'

export default function App() {
  const [influencers, setInfluencers] = useInfluencers()
  const [userProfile, setUserProfile] = useProfile()

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/navigate">
          <NavigationPage />
        </Route>
        <Route path="/create">
          <CreateProfile
            onCreateProfile={(profile) => setUserProfile(profile)}
          />
        </Route>
        <Route path="/profile">
          <HeaderCreateProfile headline="Your profile" />
          {userProfile && (
            <Profile key={userProfile.username} {...userProfile} />
          )}
        </Route>
        <Route exact path="/categories">
          <CategoryPage />
        </Route>
        <Route path="/influencerList">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/food">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Food')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/fitness">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Fitness')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/beauty">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Beauty')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/fashion">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Fashion')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/interior">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Interior')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/travel">
          <HeaderInfluencerList headline="Browse" />
          <InfluencerList
            influencerData={influencers.filter((profile) =>
              profile.categories.includes('Travel')
            )}
            onFavouriteClick={toggleFavourite}
          />
        </Route>
        <Route path="/favourites">
          <HeaderFavourites headline="Favourites" />
          <FavouritePage
            onFavouriteClick={toggleFavourite}
            influencerData={influencers.filter(
              (profile) => profile.isFavourite
            )}
          />
        </Route>
      </Switch>
    </main>
  )

  function toggleFavourite(influencer) {
    const index = influencers.indexOf(influencer)
    setInfluencers([
      ...influencers.slice(0, index),
      { ...influencer, isFavourite: !influencer.isFavourite },
      ...influencers.slice(index + 1),
    ])
  }
}
