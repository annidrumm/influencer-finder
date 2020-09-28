import React from 'react'
import HeaderFavourites from './HeaderFavourites'

export default {
  title: 'Components/Header',
  component: HeaderFavourites,
}

export const favourites = () => {
  return <HeaderFavourites headline="Favourites" />
}
