import React from "react";
//only in the index.js file
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById('root'));
//first parameter for the app component (main component), second parameter is the element we want to render on 
root.render(<App />)