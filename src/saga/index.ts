import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SAGA_EDIT_FORM } from "./action";
import { formSlice } from "./reducer";

function* onEditForm() {
  yield delay(1000);
  yield put(formSlice.actions.editItem());
}

function* Allsaga() {
  yield takeLatest(SAGA_EDIT_FORM, onEditForm);
}

export default Allsaga;
