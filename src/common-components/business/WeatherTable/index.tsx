import * as React from 'react';
import WeatherTableRow from './WeatherTableRow';

export type Props = {};

const weatherTable: React.FC<Props> = (props: Props) => {
	return (
		<table className="ui very basic table">
			<tbody>
				<WeatherTableRow />
				<WeatherTableRow />
				<WeatherTableRow />
				<WeatherTableRow />
				<WeatherTableRow />
				<WeatherTableRow />
				<WeatherTableRow />
			</tbody>
		</table>
	);
};

export default weatherTable;
