/**
 * Here you add all the apis urls defenition
 */

import request from '@base/features/base-api';
import { AxiosResponse } from 'axios';
import { config } from 'config';
import GenericMobileImage from 'public/assets/images/generic-mobile.jpg';
import responseExample from './mocks/response_example.json';
import { Device } from 'actions/catalog/interface';

export interface Api {
	getDevices: () => Promise<AxiosResponse>;
	getWeather: () => Promise<AxiosResponse>;
	getDevicesMock: () => any;
}

export const createApi = (baseURL = config.ROOT_SERVER_URL): Api => ({
	getDevices: () =>
		request.call({
			baseURL: 'http://6ew7g.mocklab.io/' || baseURL,
			method: 'get',
			url: '/getlatestWithCustomResponseCode',
		}),
	// https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=542ffd081e67f4512b705f89d2a611b2
	// getWeater: () => request.call({
	// 	baseURL: 'https://api.openweathermap.org/data/2.5/',
	// 	method: 'get',
	// 	url: '/forecast/daily',
	// 	params: {
	// 		q: 'London',
	// 		units: 'metric',
	// 		cnt: '7',
	// 		appid: '542ffd081e67f4512b705f89d2a611b2',
	// 	},
	// }),
	getWeather: () =>
		request.call({
			baseURL:
				'https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=542ffd081e67f4512b705f89d2a611b2',
			method: 'get',
		}),

	getDevicesMock: () => {
		const genericImage = GenericMobileImage;

		const mock = (responseExample as Device[]).map((item) => {
			const temp = { ...item };
			temp.image = genericImage;
			return temp;
		});

		return {
			status: 200,
			data: mock,
		};
	},
});

export default createApi();
