import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { config as appConfig } from 'config';
import ErrorHandlerConfig from 'configurations/error.config.json';
import { dispatchErrorHandler } from '@base/features/base-error-handler';
import { endSpinner, startSpinner } from '@base/features/base-global-spinner';

const { pathToErrorCode } = ErrorHandlerConfig;

class Request {
	constructor() {
		if (appConfig.COMMON_URL_PARAMS) {
			this.setCommonParams(appConfig.COMMON_URL_PARAMS);
		}
	}

	setCommonHeader(key: string, value: string) {
		axios.defaults.headers.common[key] = value;
	}

	setCommonParams(commonParams: Array<{key: string; value: string}>) {
		axios.defaults.params = {};

		commonParams.forEach((param) => {
			axios.defaults.params[param.key] = param.value;
		});
	}

	setRequestHeaders(originalConfig: AxiosRequestConfig): AxiosRequestConfig {
		const config = originalConfig;
		const commonAuthHeader = appConfig.COMMON_AUTHORIZATION_HEADER || '';
		const token = sessionStorage.getItem(commonAuthHeader);
		const auth = token ? { [commonAuthHeader]: token } : undefined;

		config.headers = {
			...originalConfig.headers,
			...auth
		};

		return config;
	}

	broadcastAction(action: any): any {
		if (!action) return null;

		return this.call({
			method: 'post',
			baseURL: appConfig.ROOT_SERVER_URL,
			url: '/users/broadcastAction',
			data: {
				action,
				token: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('wsa_token') : {}
			}
		});
	}

	async call(originalConfig: AxiosRequestConfig) {
		let response: AxiosResponse;
		const uuid = uuidv4();
		const config = this.setRequestHeaders(originalConfig);

		try {
			const commonAuthHeader = appConfig.COMMON_AUTHORIZATION_HEADER;

			startSpinner(config.url, uuid);
			response = await axios(config);
			endSpinner(config.url, uuid);

			if (commonAuthHeader && response?.headers && response.headers[commonAuthHeader]) {
				this.setCommonHeader(commonAuthHeader, response.headers[commonAuthHeader]);
			}

			const errorCode = _.get(response, pathToErrorCode);

			if (errorCode && response.status !== 200) {
				dispatchErrorHandler({ ...response });
			}

			return response;
		} catch (e) {
			const error = e.response || {};

			endSpinner(config.url, uuid);
			dispatchErrorHandler(error);

			return error;
		}
	}
}

const request = new Request();

export default request;
