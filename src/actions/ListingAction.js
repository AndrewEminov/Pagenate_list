import {LISTING_OPTIONS, SUCCESS_GETTING_LIST, GET_LIST} from "../constances/listing";

export const setOptions = (data) => ({
    type: LISTING_OPTIONS,
    payload: data
});

export const responseListingPage = (data) => ({
    type: SUCCESS_GETTING_LIST,
    payload: data
});

export const getListingPage = () => ({
    type: GET_LIST,
});
