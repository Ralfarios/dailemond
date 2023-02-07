import { HomePage } from '@/pages';
import { AuthPage } from '@/pages/auth';
import { TodoPage } from '@/pages/todo';
import { FC } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

export const GenerateRoute: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/todo' element={<TodoPage />} />
    </Routes>
  );
};
