import React from 'react';

export const PopupContext = React.createContext();

export function PopupContextProvider({ children, modal, setModal ,setLoading}) {
  return <PopupContext.Provider value={{ modal, setModal,setLoading }}>{children}</PopupContext.Provider>;
}
