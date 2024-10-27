import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Assuming React 18 or later
import App from "./App"; // Import the main App component

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
