import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state,action) =>{
    switch(action.type){
        case "RED":
            return{...state,color: "red"}
        case "BLUE":
            return{...state,color: "blue"}
        case "BLACK":
            return{...state,color: "black"}
        default:
            return{...state, color: "purple"}
    }
}

export const TitleColorContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(titleColorReducer,{color:"Purple"})

    console.log("Title color state: ",state)
    return <TitleColorContext.Provider value={{...state,dispatch}}>
                {children}
            </TitleColorContext.Provider>
}

