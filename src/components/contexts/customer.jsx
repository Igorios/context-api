import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleSumit = ({ name, email }) => {

        console.log("Dados do contexto: ", name, email);

        setName(name)
        setEmail(email)
    }

    return (
        <CustomerContext.Provider
            value={{ name, email, submit: handleSumit }}
        >
            {children}
        </CustomerContext.Provider>
    );



}