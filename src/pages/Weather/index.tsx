import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
// import { WeatherActions, weatherSelector } from 'actions/redux/weather';

export type Props = {

};

export interface OwnProps extends Props, LocalizeContextProps {

}

export class Weather extends React.Component<OwnProps> {
	render() {
		return (
			<div>
				Weather
				<i class="fas fa-sun" />
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
    Weather,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	}
);
