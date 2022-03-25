import {ACTION_TYPES} from './actionType';
export const signIn = (userData) => ({type : ACTION_TYPES.LOGIN, payload : userData});

export const signOutAction = () => ({type : ACTION_TYPES.LOGOUT});