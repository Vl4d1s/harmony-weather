import { all, fork, takeLatest } from 'redux-saga/effects';
import { createSaga } from '@base/features/base-decorator';
import * as Sagas from 'actions/weather/sagas';
import { WeatherTypes } from 'actions/weather';

/* ------------- Export Redux ------------- */
export * from 'actions/weather/redux';

/* ------------- Export Sagas ------------- */
function* watchGetWeather() {
	yield takeLatest(WeatherTypes.GET_WEATHER, createSaga(Sagas.getWeather));
}

export function* weatherSaga() {
	yield all([
		fork(watchGetWeather)
	]);
}
