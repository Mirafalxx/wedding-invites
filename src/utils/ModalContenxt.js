import React from 'react';

export const PopupContext = React.createContext();

export function PopupContextProvider({ children, modal, setModal }) {
  return <PopupContext.Provider value={{ modal, setModal }}>{children}</PopupContext.Provider>;
}
