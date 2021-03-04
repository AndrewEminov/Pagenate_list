
import {SUCCESS_GETTING_LIST, LISTING_OPTIONS} from "../constances/listing";

const initialState = {
    list: [],
    options: {
        order: 'asc',
        orderBy: 'name',
        selected: [],
        page: 0,
        rowsPerPage: 5,
    }
};


export const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_GETTING_LIST:
            return {...state, list: action.payload};
        case LISTING_OPTIONS:
            return {...state, options: {...state.options, ...action.payload}};

        default:
            return state
    }
};
