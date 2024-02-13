import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth, NotFound, Products, Profile, Checkout, Categories } from '@/pages';
import { ProtectedRoute } from './ProtectedRoute';
import { useLoginNavigate } from './useLoginNavigate';

export const Navigation: React.FC = () => {
  useLoginNavigate();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="products" />} />
      <Route path="auth" element={<Auth />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="products" element={<Products />} />
      <Route path="categories" element={<Categories />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
