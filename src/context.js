import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppPovider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSideBar = () => {
    setIsSideBarOpen(true);
    console.log("workig....")
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("close modal working...")
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobelContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppPovider };
