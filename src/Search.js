import React from 'react'
import { useState , useEffect } from 'react'
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'

const Search = () => {
    const [search , setSearch] = useState("")

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }
  return (
    <div className='Search'>
        <Link to = "/"> <IoMdArrowRoundBack/></Link>
       <input type = "text" placeholder='Search your book ' value = {search} onChange={handleSearch} />
    </div>
  )
}

export default Search