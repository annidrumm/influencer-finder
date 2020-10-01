import React from 'react'
import FavouritePage from './FavouritePage'
import influencerData from '../../mocks/influencer.json'
import HeaderFavourites from '../../components/Header/HeaderFavourites'

export default {
  title: 'Pages/FavouritePage',
  component: FavouritePage,
}

export const fullList = () => {
  return (
    <>
      {' '}
      <HeaderFavourites headline="Favourites" />{' '}
      <FavouritePage influencerData={influencerData} />{' '}
    </>
  )
}
