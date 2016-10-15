/// <reference path="../react/react.d.ts" />
/// <reference path="tcomb-react.d.ts" />

import * as React from 'react';
import { ReactChild } from 'tcomb-react';

class Card extends React.Component<{
	children: React.ReactChild
}, {}> {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
