import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from 'pages/Main'
import { ShoppingDetailPage } from 'pages/Shopping/Detail'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/shopping/detail/:shoppingItemPk" element={<ShoppingDetailPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
