import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routes";
export default function PrivateLayout() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} exact />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
