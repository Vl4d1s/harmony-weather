import { Action } from 'redux';

/* ------------- Define Actions and State ------------- */
export interface WeatherState {
	weatherData: any;
}

export enum TypesNames {
	SET_WEATHER = 'SET_WEATHER',
	GET_WEATHER = 'GET_WEATHER',
}

export declare function SetWeatherFunction(weatherData: any): SetWeatherAction;
export declare function GetWeatherFunction(): GetWeatherAction;

export interface ActionCreator {
	setWeather: typeof SetWeatherFunction;
	getWeather: typeof GetWeatherFunction;
}

export interface SetWeatherAction extends Action<TypesNames.SET_WEATHER> {
	weatherData: any;
}

export type GetWeatherAction = Action<TypesNames.GET_WEATHER>;

/* ------------- Define Any Interfaces ------------- */
