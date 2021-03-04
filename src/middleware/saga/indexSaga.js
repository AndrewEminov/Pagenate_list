import {takeLatest, all, fork} from 'redux-saga/effects';
import * as list from "./listingSaga"


import {GET_LIST} from "../../constances/listing";


function* ListingSaga() {
    yield takeLatest(GET_LIST, list.get);
}
function* IndexSaga() {
    yield all( [
        fork(ListingSaga),
    ]);

}
export default IndexSaga;
