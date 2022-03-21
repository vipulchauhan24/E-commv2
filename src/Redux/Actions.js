export const signIn = (userData) => {
    return {
        type : 'LOGIN',
        payload : userData
    }
}
export const signOutAction = () => {
    return {
        type : 'LOGOUT',
    }
}