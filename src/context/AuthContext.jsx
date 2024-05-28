import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth"
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setAuthenticates]= useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState([false])

    //clear errors after 5 seg
    useEffect(()=>{
        if (errors.length > 0 ) {
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    //registro

    const signup = async (userSignup) => {
        try {
            const res = await registerRequest(userSignup)
            setUser(res.data.playload)
            setAuthenticates(true)
            console.log(user, isAuthenticated)
        } catch (error) {
            console.log([error.response.data.message])
            setErrors([error.response.data.message])
        }
    }
    
    //login

    const signin = async (userSignin) => {
        try {
            const res = await loginRequest(userSignin)
            setUser(res.data.playload)
            setAuthenticates(true)
            console.log(user, isAuthenticated)
        } catch (error) {
            if(Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    const logout = async () =>{
        try {
            const res = await logoutRequest()
            console.log(res)
            setAuthenticates(false)
            setUser(null)
        } catch (error) {
            
        }
    }

    //check token in cookies
    useEffect(() => {
        const checkLogin = async () => {
            const cookiesAuth = Cookies.get('authToken')
            if (!cookiesAuth) {
                setAuthenticates(false)
                setLoading(false)
                console.log(cookiesAuth)
                return
            }
            try {
                const res = await verifyTokenRequest()
                //console.log(res);
                if (!res.data) return setAuthenticates(false)
                setLoading(false);
                setAuthenticates(true);
                setUser(res.data.playload);
            } catch (error) {
                setAuthenticates(false);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);


    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user,
            isAuthenticated,
            loading,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}