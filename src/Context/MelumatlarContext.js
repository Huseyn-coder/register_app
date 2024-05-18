import { createContext, useReducer } from "react";

export const melumatlarContext = createContext()

const reducer = (state, action) => {
if(action.method === "ad") {
    return {...state, name: action.payload}
}
else if(action.method === "soyad") {
    return {...state, surname: action.payload}
}
else if(action.method === "yas") {
    return {...state, year: action.payload}
}
else if(action.method === "olke") {
    return {...state, country: action.payload}
}
else if(action.method === "email") {
    return {...state, gmail: action.payload}
}
else if(action.method === "parol") {
    return {...state, parol: action.payload}
}
else {
    return state
}
console.log(state)
}

const initialState = {
    name: "",
    surname: "",
    year: 0,
    country: "",
    gmail: "",
    parol: 0

}

export default function MelumatlarContext ({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <melumatlarContext.Provider value={[state, dispatch]}>{children}</melumatlarContext.Provider>
        </>
    )
}