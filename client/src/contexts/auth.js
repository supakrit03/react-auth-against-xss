import React, { useState } from "react";

export const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState("");

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
