import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions';
// import { CountryInfoActions, countryInfoSelector } from 'actions/redux/countryInfo';

export type Props = {};

export interface OwnProps extends Props, LocalizeContextProps {}

export class CountryInfo extends React.Component<OwnProps> {
	render() {
		return (
			<>
				<br />
				<h2 className="ui header">London</h2>
				<h4 className="ui header">clear</h4>
				<h1 className="ui header">15°</h1>
				<i aria-hidden="true" className="sun icon big" />
			</>
		);
	}
}

export default baseConnect<any, any, Props>(
	CountryInfo,
	(state: ApplicationState) => {
		return {};
	},
	{}
);
