import React, { createContext, useState } from "react";
import { BACKEND } from "../constants";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const jwtDecode = (t) => {
    let token = jwt_decode(t);
    // token.raw = t;
    // token.header = JSON.parse(window.atob(t.split(".")[0]));
    // token.payload = JSON.parse(window.atob(t.split(".")[1]));
    return token;
  };

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  async function signIn(dataForm) {
    setLoading(true);
    const url = `${BACKEND}/auth`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.auth) {
          setAuthenticated(true);
          let user = jwtDecode(data.token);
          let futureDate = new Date();
          futureDate.setDate(futureDate.getDate() + 1);
          document.cookie = `token=${data.token}; expires=${futureDate}`;
          document.cookie = `user=${JSON.stringify(
            user
          )}; expires=${futureDate}`;
          if (dataForm.isRemember) {
            console.log(futureDate);
            futureDate.setDate(futureDate.getDate() + 29);
            document.cookie = `token=${data.token}; expires=${futureDate}`;
            document.cookie = `user=${JSON.stringify(
              user
            )}; expires=${futureDate}`;
          }

          setLoading(false);
          if (user.nivelAcesso === 1) {
            history.push("/dashboard");
          } else {
            history.push("/dashboardadm");
          }
        } else {
          alert("Login inválido!");
        }
      })
      .catch(function (error) {
        console.error(`Houve um problema ao fazer o Login ${error.message}`);
      });
  }

  async function signOut() {
    const url = `${BACKEND}/logout`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    setAuthenticated(false);

    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    history.push("/signin");
  }

  return (
    <AuthContext.Provider
      value={{
        setAuthenticated,
        signIn,
        signOut,
        loading,
        setLoading,
        getCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
