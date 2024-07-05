import React, { useState, useContext } from "react";
import { CustomerContext } from "./contexts/customer";

const CustomerForm = () => {

    const { submit } = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({ name, email });
    }

    return(
        <form style={{paddingTop: 40 }}>

            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            
            <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}            
            />

            <button onClick={handleSubmit}>Enviar</button>

        </form>
    )
}

export default CustomerForm;