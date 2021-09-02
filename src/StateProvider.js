import React, {createContext, useContext, useReducer } from 'react';

// Preparing data layer
export const StateContext = createContext();
// Wrap our components, provide the provider.
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we can use it inside of a component.
export const useStateValue = () => useContext(StateContext);
