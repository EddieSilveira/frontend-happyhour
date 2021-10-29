import React from 'react';
import Routes from './routes/Routes';
import { AuthProvider } from './contexts/auth';
import { createGlobalStyle } from 'styled-components';

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-family: 'Urbanist', sans-serif;
    font-size: 14px;
    text-decoration: none;
  };
  `;

  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
