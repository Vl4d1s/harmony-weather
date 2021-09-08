import * as React from 'react';

export type Props = {};

const weatherTableRow: React.FC<Props> = (props: Props) => {
	return (
		<tr className="">
			<td className="">Friday</td>
			<td className="">
				<i className="icon-right small sun icon" />
			</td>
			<td className="">15°</td>
			<td className="">15°</td>
		</tr>
	);
};

export default weatherTableRow;
