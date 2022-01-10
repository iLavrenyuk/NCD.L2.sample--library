import React from 'react';
import { routes } from './routes';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './roles/RequireAuth';
import { AddBookPage } from '../pages/AddBookPage';
import { AccountPage } from '../pages/AccountPage';
import { ViewBookPage } from '../pages/ViewBookPage';
import { MainWrapper } from '../components/MainWrapper';

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path={routes.Account} element={<RequireAuth component={AccountPage} />} />
        <Route path={routes.ViewBook} element={<RequireAuth component={ViewBookPage} />} />
        <Route path={routes.AddBook} element={<RequireAuth component={AddBookPage} />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
