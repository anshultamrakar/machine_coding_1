import React from 'react'
import { useState } from 'react'
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'

const Search = () => {
    const [search , setSearch] = useState("")
  return (
    <div className='Search'>
        <Link to = "/"> <IoMdArrowRoundBack/></Link>
       <input type = "text" placeholder='Search your book ' value = {search} onChange={(e) => console.log(e.target.value)} />
    </div>
  )
}

export default Search