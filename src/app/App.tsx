
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import ProfilePage from '../pages/profile-page';
import MainPage from '../pages/main-page';

const App: React.FC = (): JSX.Element => {
  const queryClient = new QueryClient();
  let location = useLocation();
  const auth = localStorage.getItem("token") !== null;

  return (
    <div className='bg-indigo-100 min-h-screen p-16'>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<MainPage />}
          />
          <Route
            path="/login"
            element={auth ?
              <Navigate to="/profile" state={{ from: location }} replace /> : <LoginPage />}
          />
          <Route
            path="/profile"
            element={!auth ?
              <Navigate to="/login" state={{ from: location }} replace /> : <ProfilePage />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </QueryClientProvider>
    </div>
  )
};
export default App;