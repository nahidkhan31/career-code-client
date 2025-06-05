import React from "react";
import { AuthContext } from "./AuthContex";

const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
