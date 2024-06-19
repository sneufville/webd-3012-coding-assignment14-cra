import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";

function App() {
  return (
    <div className='h-screen w-full bg-midnight text-white'>
      <div className='container mx-auto'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
