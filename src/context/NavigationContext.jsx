import React, { createContext, useContext, useState } from "react";
import {pages} from "../constants/pages.js";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(pages.HOME.id);

    return (
        <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    return useContext(NavigationContext);
};