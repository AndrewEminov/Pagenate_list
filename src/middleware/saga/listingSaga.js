import {call, put} from 'redux-saga/effects';
import * as apiList from "../API/listing";
import {responseListingPage} from "../../actions/ListingAction";

export function* get(action) {
    try {
        const data = yield call( apiList.index,  action);
        yield put(responseListingPage(data));
    } catch (e) {
        // yield put(failure(false));
    }
}
