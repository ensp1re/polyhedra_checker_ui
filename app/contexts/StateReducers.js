import { createContext, useContext, useReducer } from "react";
import { reducerCases } from "./constants";

export const initialState = {
    userWallet: undefined,
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.USER_WALLET:
            return {
                ...state,
                userWallet: action.userWallet
            };
        default:
            return state;
    }
};

export default reducer;
