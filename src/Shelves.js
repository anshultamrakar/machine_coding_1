import React from 'react'
import { useState , useEffect } from 'react'


const shelvesData = [
   

]


const Shelves = () => {
    const [books , setBooks] = useState([])
    const [currentlyReading , setCurrentlyReading] = useState([ {
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
            id :1, 
            bookname : "Read People like a Book",
            author : "CA Bhilwara",
            category : "motivation", 
            img : "https://rukminim1.flixcart.com/image/612/612/l2tcfbk0/book/s/r/y/read-people-like-a-book-original-image272ehyxgbhe.jpeg?q=70",
        },
        {
            id :2, 
            bookname : "Working backword",
            author : "Colin Bryar",
            category : "fitness", 
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/o/v/x/working-backwards-original-imaghtnkqggbgqpr.jpeg?q=70",
        }
    ])
    const [read , setRead] = useState([
        {
            id :1, 
            bookname : "Zero to One",
            author : "Peter Thiel",
            category : "motivation", 
            img : "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/l/v/o/zero-to-one-original-imag7jw5hcwng8bq.jpeg?q=70",
        },
        {
            id :2, 
            bookname : "Side Hustle",
            author : "Chris Guillebeau",
            category : "fitness", 
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/e/f/z/side-hustle-original-imagh7zgjmcspxgg.jpeg?q=70",
        }
    ])
  return (
    <div className='shelves'>
       <h4>Currently Reading</h4>
       <br/>
       <ul className='current_books'>
        {currentlyReading.map(book => (
            <li>
                <img src = {book.img}/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
                <button>+</button>
            </li>
        ))}
       </ul>
       <br/>
       <br/>
       <h4>Want to Read </h4>
       <ul className='wantread'>
       {wantRead.map(book => (
            <li className='wantread_books'>
                <img src = {book.img}/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
            </li>
        ))}
       </ul>
       <br/>
       <br/>
       <h4>Read</h4>
       <ul className='wantread'>
       {read.map(book => (
            <li className='wantread_books'>
                <img src = {book.img}/>
                <p>{book.bookname}</p>
                <p>Author : {book.author}</p>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Shelves