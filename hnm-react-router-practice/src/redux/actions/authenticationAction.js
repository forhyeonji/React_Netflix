function login(id, password){

    return (dispatch, getState)=>{
        console.log("login success action");
        dispatch({type : "LOGIN-SUCCESS", payload:{id, password }});
    };
}

export const authenticationAction = { login };