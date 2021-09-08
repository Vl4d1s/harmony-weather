import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
import { WeatherActions, weatherSelector } from 'actions/weather';
import { GetWeatherFunction } from 'actions/weather/interface';
import CountryInfo from '../../containers/CountryInfo';
import Weathers from '../../containers/Weathers';
import { Dispatch } from 'redux';

export type Props = { weatherDate: any; getWeather: typeof GetWeatherFunction };

export interface OwnProps extends Props, LocalizeContextProps {}

export class Weather extends React.Component<OwnProps> {
	componentDidMount() {
		const { weatherDate, getWeather } = this.props;

		if (!weatherDate || !weatherDate.length) {
			getWeather();
		}
		console.log(weatherDate);
	}

	render() {
		return (
			<div className="ui center aligned container">
				<CountryInfo />
				<Weathers />
			</div>
		);
	}
}

export default baseConnect<any, any, Props>(
	Weather,
	(state: ApplicationState) => ({ weatherData: weatherSelector.weatherData(state) }),
	(dispatch: Dispatch) => ({ getWeather: () => dispatch(WeatherActions.getWeather()) })
);
