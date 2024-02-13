import { toast } from "react-toastify";
import { GetAllCars } from "../api/getRequests";

const { createContext, useContext, useState, useEffect } = require("react");

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("profile")) || null)
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [cars, setCars] = useState([])
    const [categorys, setCategorys] = useState([])
    const [categoryId, setCategoryId] = useState()
    const [loading, setLoad] = useState(false)
    const toggle = () => setLoad(!loading)
  
    useEffect(()=>{
        const getCars = async () => {
        try {
            const {data} = await GetAllCars({method: 'car'}) 
            setCars(data.cars)
        } catch (error) {
            if(error.response.data.message === 'jwt expired'){
                exit()
            }
        }
        }
        getCars()
        const getCategory = async () => {
        try {
            const {data} = await GetAllCars({method: 'category'}) 
            setCategorys(data.categorys)
        } catch (error) {
            if(error.response.data.message === 'jwt expired'){
                exit()
            }
        }
        }
        getCategory()
    },[loading])
    
    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
        toast.dismiss()
        toast.info('you have successfully logged out')
    }

     const value = {
        currentUser, setCurrentUser,
        exit, serverUrl, cars, setCars, toggle,
        categorys, setCategorys, categoryId, setCategoryId
    }
 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}