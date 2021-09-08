import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import WeatherTable from '../../common-components/business/WeatherTable';
// import { WeathersActions, weathersSelector } from 'actions/redux/weathers';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {}

export class Weathers extends React.Component<OwnProps> {
	render() {
		return <WeatherTable />;
	}
}

export default baseConnect<any, any, Props>(
	Weathers,
	(state: ApplicationState) => {
		return {};
	},
	{}
);
