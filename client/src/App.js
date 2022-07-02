import React from "react";

import AuthProvider from "./contexts/auth";
import Router from "./Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
