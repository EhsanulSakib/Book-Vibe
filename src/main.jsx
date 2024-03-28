import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Read from './Components/Read/Read.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import ReadBooks from './Components/ReadBooks/ReadBooks.jsx'
import WishListBooks from './Components/WishListBooks/WishListBooks.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed-books",
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            path:'/listed-books/read-books',
            element:<ReadBooks></ReadBooks>,
            loader: () => fetch('/data.json')
          },
          {
            path:'/listed-books/wishlist',
            element:<WishListBooks></WishListBooks>,
            loader: () => fetch('/data.json')
          }
        ]
      },
      {
        path:"/read",
        element:<Read></Read>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
