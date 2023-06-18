import React from 'react'
import Shelves from './Shelves';
import Header from './Header';
import Search from './Search';
import {Routes , Route} from "react-router-dom"

const shelvesData = [
  {
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
  },
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
  },
  {
      id :5, 
      bookname : "Zero to One",
      author : "Peter Thiel",
      category : "motivation", 
      img : "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/l/v/o/zero-to-one-original-imag7jw5hcwng8bq.jpeg?q=70",
  },
  {
      id :6, 
      bookname : "Side Hustle",
      author : "Chris Guillebeau",
      category : "fitness", 
      img : "https://rukminim1.flixcart.com/image/612/612/xif0q/book/e/f/z/side-hustle-original-imagh7zgjmcspxgg.jpeg?q=70",
  }
]


function App() {
  return (
    <div >
     <Header/>
     <Routes>
      <Route path = "/" element = {<Shelves shelvesData = {shelvesData}/>}/>
      <Route path = "/search" element = {<Search shelvesData = {shelvesData}/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
