const { createContext, useContext, useState } = require("react");


const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    
    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
    }

     const value = {
        currentUser, setCurrentUser,
        exit,
    }
 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}