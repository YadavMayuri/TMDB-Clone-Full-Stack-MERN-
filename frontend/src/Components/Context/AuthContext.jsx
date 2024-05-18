import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            localStorage.removeItem("TMDBJwtToken")
            toast.success("Logout successfully.")
            return { ...state, user: null }
        default:
            return state;
    }
}

const HandleAuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getcurrentuser() {
            const token = JSON.parse(localStorage.getItem("TMDBJwtToken"))
            console.log("token here",token);
            if (token) {
                const response = await axios.post("http://localhost:8000/getCurrentUser", { token })
                console.log(response.data,"response here from auth context");
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                        
                    })
                } else {
                    toast.error(response.data.message)
                }
            }
        }
        getcurrentuser()
    }, [])

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;