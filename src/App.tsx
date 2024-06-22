import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";

function App() {
  return (
    <div className='h-screen w-full bg-midnight text-white overflow-y-scroll'>
      <div className='container h-full mx-auto'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
