import React from 'react'
import "./Search.scss"
import { IoIosArrowForward } from 'react-icons/io'

import { SearchResult } from '../..'
const Search = () => {
  return (
    <>
    <div className="map">
      <p>
        Главная  <IoIosArrowForward />Результаты поиска
      </p>
      
    </div>
     <SearchResult/>
  </>
  )
}

export default Search