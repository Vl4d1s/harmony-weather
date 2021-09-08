import { createDraft, Draft } from 'immer';
import { createReducerCase } from '@base/features/base-decorator';
import { createActions, createReducer } from 'reduxsauce';
import { ApplicationState } from 'actions';
import {
	ActionCreator, SetWeatherAction, TypesNames, WeatherState
} from './interface';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	getWeather: [], // handle by saga
	setWeather: ['weatherData'],
});

export const WeatherTypes = TypesNames;
export const WeatherActions = Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = createDraft<WeatherState>({
	weatherData: [],
});

/* ------------- Selectors ------------- */

export const weatherSelector = {
	weatherData: (state: ApplicationState) => state.weather?.weatherData,
};

/* ------------- Reducers ------------- */

const setWeatherReducer = (draft: Draft<WeatherState>, action: SetWeatherAction) => {
	const { weatherData } = action;
	draft.weatherData = weatherData;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<any, any>(INITIAL_STATE, {
	[WeatherTypes.SET_WEATHER]: createReducerCase(setWeatherReducer),
});
