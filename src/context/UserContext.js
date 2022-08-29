import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  users: [],
  isLoggedIn: false,
  userExist: false,
  incorrectInfo: false,
  onRegister: () => {},
  onLogIn: () => {},
  onLogout: () => {},
});

export const UserContextProvider = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [incorrectInfo, setIncorrectInfo] = useState(false);

  const newUserHandler = (userData) => {
    if (
      users.length > 0 &&
      users.find((user) => {
        return user.id.trim() === userData.id.trim();
      })
    ) {
      setUserExist(true);
      return console.log("user exist");
    } else {
      setUsers((prevUsers) => {
        return [...prevUsers, userData];
      });
      localStorage.setItem("users", JSON.stringify([...users, userData]));
      localStorage.setItem("isLoggedIn", JSON.stringify(userData));
    }
    setUserExist(false);
    setIsLoggedIn(true);
    navigate("/");
  };

  const logInHandler = (userData) => {
    if (
      users.length > 0 &&
      users.find((user) => user.id === userData.email) &&
      users.find((user) => user.password === userData.password.toString())
    ) {
      setIncorrectInfo(false);
      localStorage.setItem("isLoggedIn", JSON.stringify(userData));
      setIsLoggedIn(true);
      navigate("/");
    } else {
      console.log("Incorrect!", userData.email, userData.password);
      setIncorrectInfo(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== null) {
      localStorage.removeItem("isLoggedIn");
    }
    if (localStorage.getItem("users") === null) {
      return;
    } else {
      const items = JSON.parse(localStorage.getItem("users"));
      setUsers([...items]);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        users: users,
        isLoggedIn: isLoggedIn,
        userExist: userExist,
        incorrectInfo: incorrectInfo,
        onRegister: newUserHandler,
        onLogIn: logInHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
