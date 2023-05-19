import types from "../types";



export const changeLanguage = (payload) => {
    return {
        type: types.SET_LANG,
        payload,
    };
};

