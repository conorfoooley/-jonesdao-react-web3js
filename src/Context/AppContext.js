import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const [headerActive,setHeaderActive] = useState("vaults");
    const provider = {
        headerActive, 
        setHeaderActive,
    }

    return (
        <AppContext.Provider value={provider}>
            {props.children}
        </AppContext.Provider>
    )
}