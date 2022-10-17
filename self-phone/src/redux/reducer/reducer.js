const initialState={
    contact : [],
    keyword : "",
}

function reducer (state=initialState, action){
    console.log(action);

    let { type, payload } = action;

    switch(type){
        case "ADD-CONTACT" :
            state.contact.push({
                name : payload.name,
                phoneNumber : payload.phoneNumber,
            });
            
            break;
        
        case "SEARCH-CONTACT" :
            state.keyword = payload.keyword;
            break;
    }
    return {...state};
}

export default reducer