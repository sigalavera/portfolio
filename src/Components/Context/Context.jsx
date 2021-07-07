import React from 'react';

const context = React.createContext();
export const providerConst = context.Provider;
export const consumerConst = context.Consumer;

export default context;