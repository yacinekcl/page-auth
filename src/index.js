import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";

const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
/* console.log("CLERK KEY:", clerkKey); // You should see this in your browser devtools */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey={clerkKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
