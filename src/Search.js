import React from 'react'
import { useState , useEffect } from 'react'
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'

const Search = ({shelvesData}) => {
    const [search , setSearch] = useState("")
    const [searchData , setSearchData] = useState([])

  

    const  handleChange = (e) => {
        setSearch(e.target.value)
        const filteredResults = shelvesData.filter(book => (book.bookname).toLowerCase().includes(search.toLowerCase())
        || (book.author).toLowerCase().includes(search.toLowerCase()))
        setSearchData(filteredResults.reverse())
    }

 
  return (
    <div className='Search'>
        <Link to = "/"> <IoMdArrowRoundBack/></Link>
        <input type = "text" placeholder='Search your book ' value = {search} onChange={handleChange} />
        <ul className='search_book'>
        {searchData.map(book => (
            <li>
                <img src = {book.img}/>
                <p>{book.bookname}</p>
                <p>{book.author}</p>
            </li>
        ))} 
        </ul>
       
    </div>
  )
}

export default Search