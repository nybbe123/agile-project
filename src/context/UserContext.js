import React, { createContext, useState } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogout: () => {},
});

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    console.log("test");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    console.log("test");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: logInHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
