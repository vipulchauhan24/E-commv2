import { createSelector } from 'reselect'

const getCategories = (state) => state.category;

export const categoriesSelector = createSelector(
    [getCategories],
    (category) => category
)