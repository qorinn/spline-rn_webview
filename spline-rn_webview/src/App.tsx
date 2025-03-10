import { Routes, Route } from 'react-router-dom';
import SplineViewer from './SplineViewer';
import "./App.css"

export default function App() {
  return (
    <Routes>
      <Route path="/spline/:id" element={<SplineViewer />} />
      <Route path="/" element={<div><p>szia</p></div>} />
    </Routes>
  );
}