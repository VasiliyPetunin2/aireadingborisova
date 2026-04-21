import React, { createContext, useContext, useState } from "react";
import {pages} from "../constants/pages.js";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [page, setPage] = useState(pages.HOME.id);

    return (
        <NavigationContext.Provider value={{ page, setPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    return useContext(NavigationContext);
};