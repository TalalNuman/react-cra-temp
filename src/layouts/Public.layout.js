import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes";
export default function PrivateLayout() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} exact />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
