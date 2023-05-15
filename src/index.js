import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Layout } from "./components/Layout"
import { GlobalProvider } from "./Context/globalContext"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
)
