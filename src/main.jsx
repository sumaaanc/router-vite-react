import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {loaderGetData} from './components/Github/Github.jsx'
import Company from './components/About/Company/Company.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[
//       {
//         path: "",
//         element: <Home />

//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//below router is same as above

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/user/:userid/:name' element={<User />}/>
      <Route 
      path='/github' 
      element={<Github />}
      loader={loaderGetData}
      />
      <Route path='/about/company' element={<Company />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
