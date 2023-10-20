import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/ContactUs'
import User from './components/User/User'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub'



// 1st Method to render routes 
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])



// 2nd Method to render routes 
const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route  path='' element={<Home/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='contact' element={<Contact/>}/>
      <Route  path='user/:userId' element={<User/>}/>
      <Route  
      loader={githubInfoLoader}
      path='github'
      element={<GitHub/>}
      />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
