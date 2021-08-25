import * as React from 'react';
import { Switch } from 'react-router-dom';
import FlowManagerConfig from 'public/config/flow-manager/types.json';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from '../App';
import ErrorPage from 'pages/ErrorPage';
import DeviceGalleryPage from 'pages/DevicesGallery';
import Checkout from 'pages/Checkout';
import FormExample from 'pages/FormExample';
import Weather from 'pages/Weather';

/* -------------- Routes Paths --------------- */
import RoutesPath from './RoutesPath';

const { stepTypes } = FlowManagerConfig;

export default (
	<App>
		<Switch>
			<Route exact path={RoutesPath.ROOT} step={stepTypes.DEVICE_GALLERY.name} component={DeviceGalleryPage} />
			<Route exact path={RoutesPath.CHECKOUT} step={stepTypes.CHECKOUT.name} component={Checkout} />
			<Route exact path={RoutesPath.WEATHER} component={Weather} />
			<Route
				exact
				path={RoutesPath.FORM_EXAMPLE}
				component={() => <FormExample form="FormExample" />}
			/>
			<Route
				exact
				path={RoutesPath.CHECKOUT_SAMSUNG}
				step={stepTypes.CHECKOUT_SAMSUNG.name}
				component={() => <h1>Checkout for Samsung</h1>}
			/>
			<Route
				exact
				path={RoutesPath.CHECKOUT_XIAOMI}
				step={stepTypes.CHECKOUT_XIAOMI.name}
				component={() => <h1>Checkout for Xiaomi</h1>}
			/>
			<Route exact path={RoutesPath.ERROR_PAGE} component={() => <ErrorPage />} />
		</Switch>
	</App>
);
