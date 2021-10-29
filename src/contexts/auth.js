import React, { createContext, useState } from 'react';
import { BACKEND } from '../constants';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [objUsuarioAtivo, setObjUsuarioAtivo] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const jwtDecode = (t) => {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return token;
  };

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  async function signIn(dataForm) {
    setLoading(true);
    const url = `${BACKEND}/auth`;
    await fetch(url, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.auth) {
          localStorage.setItem('token', JSON.stringify(data.token));
          setAuthenticated(true);
          setToken(data.token);
          let user = jwtDecode(data.token).payload;
          setObjUsuarioAtivo(user);
          setLoading(false);
          if (user.nivelAcesso === 1) {
            history.push('/dashboard');
          } else {
            history.push('/dashboardadm');
          }
        } else {
          alert('Login inválido!');
        }
      })
      .catch(function (error) {
        console.error(`Houve um problema ao fazer o Login ${error.message}`);
      });
  }

  async function signOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    setToken(null);
    history.push('/signin');
  }

  return (
    <AuthContext.Provider
      value={{
        objUsuarioAtivo,
        authenticated,
        signIn,
        signOut,
        token,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
