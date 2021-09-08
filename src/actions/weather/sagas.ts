import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import api from 'requests';
import { WeatherActions } from 'actions/weather';

export function* getWeather() {
	const response: AxiosResponse = yield call(api.getWeather);

	console.log(response.data.list);

	if (response.status === 200) {
		yield put(WeatherActions.setWeather(response.data.list));
	}
}
