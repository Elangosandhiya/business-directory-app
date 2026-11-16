import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessList   from "./pages/BusinessList";
import BusinessDetail from "./pages/BusinessDetail";

const App = () => (
  <BrowserRouter>
    <header className="bg-white shadow-sm py-4 px-6 mb-4">
      <h1 className="text-xl font-bold text-blue-700">📋 Business Directory</h1>
    </header>
    <main>
      <Routes>
        <Route path="/"               element={<BusinessList />}   />
        <Route path="/businesses/:id" element={<BusinessDetail />} />
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
          </div>
        } />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
