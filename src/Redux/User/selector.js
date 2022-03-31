import { createSelector } from "reselect";

const getUserDetails = (state) => state.user;

const userSelector = createSelector(
    [getUserDetails],
    (user) => user
)

export default userSelector;