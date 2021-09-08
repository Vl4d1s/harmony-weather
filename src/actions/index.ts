import { combineReducers, Reducer } from 'redux';
import { all, fork } from 'redux-saga/effects';
import baseReducers, { BaseApplicationState } from '@base/features/base-reducers';

/* ------------- Import States ------------- */
import { CatalogState } from 'actions/catalog/interface';
import { CartState } from 'actions/cart/interface';
import { WeatherState } from 'actions/weather/interface';

/* ------------- Import Sagas ------------- */
import { catalogSaga } from 'actions/catalog';
import { weatherSaga } from 'actions/weather';
import { flowManagerSaga } from 'actions/flowManager';
import makeCart from '@base/features/base-cart';

const baseCartReducer = makeCart('cart').reducer;

/* ------------- Define ApplicationState ------------- */
export interface ApplicationState extends BaseApplicationState {
	cart: CartState;
	catalog: CatalogState;
	weather: WeatherState;
}

/* ------------- Export Reducers ------------- */
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,

	cart: require('./cart').reducer(baseCartReducer),
	catalog: require('./catalog').reducer,
	weather: require('./weather').reducer,
});

/* ------------- Export Sagas ------------- */
export const rootSaga = function* () {
	yield all([fork(flowManagerSaga)]);
	yield all([fork(require('./cart').cartSaga)]);
	yield all([fork(catalogSaga)]);
	yield all([fork(weatherSaga)]);
};
