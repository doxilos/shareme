import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import App from "./App"
import "./index.css"

const rootElement = document.getElementById("root")
render(
  <StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}>
        <App />
      </GoogleOAuthProvider>
    </Router>
  </StrictMode>,
  rootElement
)
