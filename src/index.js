import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-h2w6j21014270tvj.us.auth0.com"
    clientId="LK9i3oeQDMzEB0ly8rqnlRwUDYQGsAVe"
    authorizationParams={{
      redirect_uri: window.location.origin + '/auth_redirect',
      audience: "https://dev-h2w6j21014270tvj.us.auth0.com/api/v2/"
    }}
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
