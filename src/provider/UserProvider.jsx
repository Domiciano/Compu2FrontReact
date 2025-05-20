import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            setUser(
                JSON.parse(storedUser)
            );
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}