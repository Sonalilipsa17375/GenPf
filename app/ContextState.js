"use client"
import UserContext from "./Context";

const ContextState = (props)=>{
    const state = {
        "name":"enu",
        "class":"9"
    }
    return(
    <UserContext.Provider value={state}>
        {props.children}
    </UserContext.Provider>
    )
}

export default ContextState