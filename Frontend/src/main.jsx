import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/client';
// import client from './utils/client';
import App from './App.jsx';
import ErrorPage from './pages/errorpage.jsx'
import HomePage from './pages/homepage.jsx';
import FinancePage from './pages/financepage.jsx';
import ForumPage from './pages/forumpage.jsx';
import LoginPage from './pages/login-register.jsx';
import AboutPage from './pages/aboutpage.jsx';
import ProfilePage from './pages/profile.jsx'
import HealthPage from './pages/healthpage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/forum/*',
        element: <ForumPage />
      },
      {
        path: '/finance',
        element: <FinancePage />
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/health',
        element: <HealthPage/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
      {
        path: '/profile',
        element: <ProfilePage/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <RouterProvider router={router} />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
);