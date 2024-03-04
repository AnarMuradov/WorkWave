import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : null);
  const [decode, setDecode] = useState(null);
  function addToken(token) {
    setToken(token)
        Cookies.set('token', token, { expires: 1 })
    }
  useEffect(() => {
    if (token) {
      setDecode(jwtDecode(token))
  }
}, [token])
  
  function LogOut(){
    setToken(null);
    setDecode(null);
    Cookies.remove('token')
  }
  return (
    <UserContext.Provider value={{ token, decode, addToken,LogOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
