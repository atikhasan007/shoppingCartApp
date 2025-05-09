import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import RootLayout from '../pages/RootLayout';
import PostList from '../pages/PostList';
import UserList from '../pages/UserList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', 
        index: true,  // ✅ This means it's the default route for "/"
        element: <Shop />,
      },
      {
        path: '/cart',  // ✅ No extra space
        element: <Cart />,
      },
      {
        path: '/posts',
        element: <PostList/>
      },
      {
        path: '/users',
        element: <UserList/>
      }
    
    ],
  },
]);
