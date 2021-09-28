import React, { createContext, useContext, useReducer } from "react";

// prepare dataLayer
export const StateContext = createContext();

// wrap app and provide datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from datalayer
export const useStateValue = () => useContext(StateContext);
