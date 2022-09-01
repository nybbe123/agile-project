import React, { useState } from "react";

const LinkContext = React.createContext({
  isDetail: false,
  onNavigate: () => {},
});

export const LinkContextProvider = (props) => {
  const [isDetail, setIsDetail] = useState(false);

  const navigateHandler = (data) => {
    setIsDetail(data);
  };

  return (
    <LinkContext.Provider
      value={{
        isDetail: isDetail,
        onNavigate: navigateHandler,
      }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
