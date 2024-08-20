
import './layout.scss'
import Layout from './routes/layout/layout'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './routes/homaPage/HomePage'
import ListPage from './routes/listPage/ListPage';
import LoginPage from './routes/loginPage/LoginPage';
import SinglePage from './routes/singlePage/SinglePage'
import Profile from './routes/profile/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/login",
          element: <LoginPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },

      ]
    },

  ]);
  return (


    <RouterProvider router={router}/>
  )
}

export default App