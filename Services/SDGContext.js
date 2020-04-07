import React from 'react';

const SDGContext = React.createContext();

export const SDGProvider = SDGContext.Provider;
export const SDGConsumer = SDGContext.Consumer;

export default SDGContext;
