import {ACTION_TYPES} from './actionTypes';

export const loadCategories = (categories) => ({type : ACTION_TYPES.LOAD_CATEGORIES, categories : categories});