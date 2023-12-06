import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NavBar from './components/sidebar/sidebar';
import Home from './pages/home';
import './style/App.css';
import Header from './components/header/header';
import Explore from './pages/explore';
import NotiFication from './pages/notification';
import Messages from './pages/messages';
import Lists from './pages/lists';
import BookMarks from './pages/bookmarks';
import Profile from './pages/profile';
import More from './pages/more';




let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore/>,
  },
  {
    path: "/notification",
    element: <NotiFication/>,
  },
  {
    path: "/messages",
    element: <Messages/>,
  },
  {
    path: "/bookmarks",
    element: <BookMarks/>,
  },
  {
    path: "/lists",
    element: <Lists/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/more",
    element: <More/>,
  }
  
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
