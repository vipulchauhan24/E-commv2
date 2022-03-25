const initialState = {
    displayName : '',
    email : '',
    profile : ''
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                displayName : action.payload.displayName,
                email : action.payload.email,
                profile : action.payload.profile,
                loggedIn : true,
                accessToken : action.payload.accessToken
            }
        case 'LOGOUT':
            return {
                ...state,
                displayName : '',
                email : '',
                profile : '',
                loggedIn : false,
                accessToken : ''
            }
    
        default:
            return state;
    }
}

export default userReducer;