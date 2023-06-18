import React from 'react'
import { useState , useEffect } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"



const Shelves = ({shelvesData}) => {
    const [books , setBooks] = useState(shelvesData)
    const [currentlyReading , setCurrentlyReading] = useState([{
        id :1, 
        bookname : "Fitness Nutrition",
        author : "Nikolas Bojrn",
        category : "fitness", 
        img : "https://m.media-amazon.com/images/I/51iVTNR73aL.jpg",
    },
    {
        id :2, 
        bookname : "The ultimate body stretching guide",
        author : "Dave Lelino",
        category : "fitness", 
        img : "https://images-na.ssl-images-amazon.com/images/I/51-gj23jkvL.jpg",
    }])
    const [wantRead , setWantRead] = useState([
        {
            id :3, 
            bookname : "Read People like a Book",
            author : "CA Bhilwara",
            category : "motivation", 
            img : "https://rukminim1.flixcart.com/image/612/612/l2tcfbk0/book/s/r/y/read-people-like-a-book-original-image272ehyxgbhe.jpeg?q=70",
        },
        {
            id :4, 
            bookname : "Working backword",
            author : "Colin Bryar",
            category : "fitness", 
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/o/v/x/working-backwards-original-imaghtnkqggbgqpr.jpeg?q=70",
        }
    ])
    const [read , setRead] = useState([])

    const handleWantRead = (book) => {
       const wantList = [...wantRead , book]
       setWantRead(wantList)
    }


    const handleCurrentRead = (book) => {
     const currentList = [...currentlyReading , book]
     setCurrentlyReading(currentList)
    }



  return (
    <div className='shelves'>
       <h2>Currently Reading</h2>
       <ul className='bookItems'>
        {currentlyReading.map(book => (
            <li className='bookList'>
                <img src = {book.img} width= "150" height= "200"/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
                <button onClick={() => handleCurrentRead(book)}>Currently reading</button>
                <button onClick={() => handleWantRead(book)}>Want to read</button>
                <button>Read</button>
            </li>
        ))}
       </ul>
       <h2>Want to read</h2>
       <ul className='bookItems'>
       {wantRead.map(book => (
        <li className='bookList'>
             <img src = {book.img} width= "150" height= "200"/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
                <button >Currently reading</button>
                <button>Want to read</button>
                <button>Read</button>
        </li>
       ))}
       </ul>
  
    </div>
  )
}

export default Shelves