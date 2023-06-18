import React from 'react'
import { useState , useEffect } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"



const Shelves = ({shelvesData}) => {
    const [books , setBooks] = useState(shelvesData)
    const [currentlyReading , setCurrentlyReading] = useState([{
        id :1, 
        bookname : "Fitness Nutrition",
        author : "Nikolas Bojrn",
        category : "current", 
        img : "https://m.media-amazon.com/images/I/51iVTNR73aL.jpg",
    },
    {
        id :2, 
        bookname : "The ultimate body stretching guide",
        author : "Dave Lelino",
        category : "current", 
        img : "https://images-na.ssl-images-amazon.com/images/I/51-gj23jkvL.jpg",
    }])
    const [wantRead , setWantRead] = useState([
        {
            id :3, 
            bookname : "Read People like a Book",
            author : "CA Bhilwara",
            category : "wantToRead", 
            img : "https://rukminim1.flixcart.com/image/612/612/l2tcfbk0/book/s/r/y/read-people-like-a-book-original-image272ehyxgbhe.jpeg?q=70",
        },
        {
            id :4, 
            bookname : "Working backword",
            author : "Colin Bryar",
            category : "wantToRead", 
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/o/v/x/working-backwards-original-imaghtnkqggbgqpr.jpeg?q=70",
        }
    ])
    const [read , setRead] = useState([
        {
            id :5, 
            bookname : "Zero to One",
            author : "Peter Thiel",
            category : "read", 
            img : "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/l/v/o/zero-to-one-original-imag7jw5hcwng8bq.jpeg?q=70",
        },
        {
            id :6, 
            bookname : "Side Hustle",
            author : "Chris Guillebeau",
            category : "read", 
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/e/f/z/side-hustle-original-imagh7zgjmcspxgg.jpeg?q=70",
        }
    ])

    const handleWantRead = (book) => {
       const wantList = [...wantRead , book]
       setWantRead(wantList)
       const filterBooks = currentlyReading.filter(book => book.id === book.id)
       setCurrentlyReading(filterBooks)
    }


    const handleCurrentRead = (book) => {
     const currentList = [...currentlyReading , book]
     setCurrentlyReading(currentList)
    }


    const handleRead = (book) => {
     const readList = [...read , ...book]
     setRead(readList)
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
                <button disabled = {book.category === "current" ? true : false} onClick={() => handleCurrentRead(book)}>Currently reading</button>
                <button disabled = {book.category === "wantToRead" ? true : false} onClick={() => handleWantRead(book)}>Want to read</button>
                <button  disabled = {book.category === "read" ? true : false}onClick={() => handleRead(book)}>Read</button>
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
                <button disabled = {book.category === "current" ? true : false} onClick={() => handleCurrentRead(book)}>Currently reading</button>
                <button disabled = {book.category === "wantToRead" ? true : false} onClick={() => handleWantRead(book)}>Want to read</button>
                <button  disabled = {book.category === "read" ? true : false}onClick={() => handleRead(book)}>Read</button>
        </li>
       ))}
       </ul>
       <h2>Read</h2>
       <ul className='bookItems'>
        {read.map(book => (
            <li className='bookList'>
                 <img src = {book.img} width= "150" height= "200"/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
                <button disabled = {book.category === "current" ? true : false} onClick={() => handleCurrentRead(book)}>Currently reading</button>
                <button disabled = {book.category === "wantToRead" ? true : false} onClick={() => handleWantRead(book)}>Want to read</button>
                <button  disabled = {book.category === "read" ? true : false}onClick={() => handleRead(book)}>Read</button>
        </li>
        ))}
       </ul>
  
    </div>
  )
}

export default Shelves